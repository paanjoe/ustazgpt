import { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';
import { storeFlag } from '../../components/constant';


export default async function (req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;
    const baseUrl = process.env.API_URL;
    const client = new PocketBase(baseUrl);
    const collectionName = storeFlag;

    switch(method) {
        case 'POST':
            try {
                const create = await req.body;
                const record = await client.collection(collectionName).create({
                    questions: create.ansModel.questions,
                    answer: create.ansModel.answer,
                    email: create.ansModel.email
                });
                return res.status(201).json({ success: true, data: record });
            } catch(err: any) {
                return res.status(400).json(err);
            }
        case 'GET':
                try {
                  const records = await client.collection(collectionName).getFullList(200);
                  return res.status(200).json(records);
                } catch (err) {
                  return res.status(400).json(err);
                }
          
        default:
            res.setHeader('Allow', ['POST']);
            return res.status(405).json(`Method ${method} Not Allowed`);
    }
}