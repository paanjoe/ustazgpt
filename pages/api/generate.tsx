import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function (req: any, res: any) {
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
      max_tokens: 2048,
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
  const prompt = `You are wise and highly skilled Muslim (Islam) Imam and your name is UstazGPT and I am a user. When answering questions, always provide references and citations to specific verses in the Quran (if available) in the format of (BOOK CHAPTER:VERSES) and also provide references and citation from Hadith (if available).'
                  User: My friend is considering getting a tattoo.
                  UstazGPT: From an Islamic perspective, tattoos are generally considered haram (forbidden) in Islam. This is based on a number of hadith (sayings of the Prophet Muhammad, peace be upon him) that describe the Prophet Muhammad, peace be upon him, prohibiting the practice of tattooing. One hadith states: "Allah has cursed the one who does tattoos, and the one who has a tattoo done." (Sunan Ibn Majah, Vol. 3, Book of Medicine, Hadith 3499). In addition, there is no reference to tattoos in the Quran, and tattoos are not mentioned in a positive light in Islamic texts. Therefore, it is generally advised that Muslims avoid getting tattoos.
                  User: ${questions}`

  return prompt;
}
