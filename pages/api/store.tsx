import { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';
import { storeLogin } from '../../components/constant';


export default async function (req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;
    const baseUrl = process.env.API_URL;
    const client = new PocketBase(baseUrl);
    const collectionName = storeLogin;

    switch(method) {
        case 'POST':
            try {
                const create = await req.body;
                const checkRecord = await client.collection(collectionName).getList(1,50,{
                    filter: `email="${create.userModel.email}"`
                });
                if (checkRecord.items.length === 0) {
                    const record = await client.collection(collectionName).create({
                        name: create.userModel.name,
                        email: create.userModel.email,
                        image: create.userModel.image
                    });
                    return res.status(201).json({ success: true, data: record });
                } else {
                    return res.status(201).json({ success: true, data: checkRecord});
                }       
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
            res.setHeader('Allow', ['POST','GET']);
            return res.status(405).json(`Method ${method} Not Allowed`);
    }
}