import { Configuration, OpenAIApi } from "openai";
import { Prompt, Security_Prompt } from "../../components/constant";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function (req: any, res: any) {
  const { context } = req.netlifyFunctionParams || {};
  if (context) {
    console.log("Setting callbackWaitsForEmptyEventLoop: false");
    context.callbackWaitsForEmptyEventLoop = false;
  }

  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions.",
      },
    });
    return;
  }

  const questions = req.body.questions || "";

  if (questions.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid questions",
      },
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(questions),
      temperature: 0.3,
      max_tokens: 2048
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error: any) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}

function generatePrompt(questions: any) {
  const prompt = `${Security_Prompt}. ${Prompt} ${questions}`;
  console.log(prompt);
  return prompt;
}
