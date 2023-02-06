# UstazGPT

[![Netlify Status](https://api.netlify.com/api/v1/badges/863efa2f-c33f-4757-a106-0bada798834e/deploy-status)](https://app.netlify.com/sites/velvety-sprinkles-5f0fcf/deploys)

Welcome to the "UstazGPT" repository! This AI Chat app is designed to provide a platform to ask questions and learn about Islamic beliefs, practices and culture. It uses OpenAI to provide users with an interactive conversation experience. 

The app includes a variety of topics, from basic Islamic teachings to more complex topics. 

**Contributor are highly welcomed! [Sponsors](https://www.buymeacoffee.com/paanjoe) as well to keep the site and OpenAI API running.**

*Disclaimer: UstazGPT is an AI chat that is for informational purposes only and may not be 100% accurate. The information provided may not be complete or up-to-date and should not be relied upon as professional advice. UstazGPT and its affiliates cannot guarantee accuracy and shall not be held responsible for errors or inaccuracies. Please seek professional advice before making any decisions.*

## Getting Started

### Dependencies

* [✍️ NextJS 13](https://nextjs.org/)
* [🎨 TailwindCSS + Flowbite](https://flowbite.com/)
* [💾 PocketBase](https://pocketbase.io/)
* [🤖 OpenAI](https://openai.com/)
* [📊 Google Analytics](https://analytics.google.com/analytics/web/)

### Installing
Clone the Repositories

    git clone https://github.com/paanjoe/ustazgpt.git

Install the Node Modules

    npm i
Setup the .env files

    OPENAI_API_KEY=PUT_YOUR_OPENAI_API_KEY_HERE
    GOOGLE_ID=GOOGLE_ID_HERE
    GOOGLE_SECRET=GOOGLE_SECRET_API_KEY_HERE
    NEXTAUTH_URL=YOUR_URL_HERE
    API_URL=POCKETBASE_URL
    GOOGLE_ANALYTICS=STREAM_ID
Start the development environment

    npm run dev

### Data Model

Since the cost of running pre-trained [embedded data](https://platform.openai.com/docs/guides/embeddings/what-are-embeddings) & [fine-tuning](https://platform.openai.com/docs/guides/fine-tuning) are quite expensive, the current source only uses prompt-based to answer questions. 

Long-term vision is to train the OpenAI with the data from Quran & Hadith to give accurate and definite answer to our user. 

Please go to [HERE](https://github.com/paanjoe/ustazgpt/tree/main/dataset) to see the dataset from Quran & Hadith. 

## Contributing

If you want to contribute to this project feel free to open an [issue here](https://github.com/paanjoe/ustazgpt/issues). Then you may pull request.

## Workflow
1. Create a new branch and name the branch with a descriptive name.
2. Perform some development and testing on your local.
3. Once you're done, run this command `git fetch && git merge origin/main`and push the change to this repositories.
4. Create new pull request and fill up informative description.
5. Developers will review and approve the change.

## Contributor

Contributors names and contact info

ex. [@PaanJoe](https://www.linkedin.com/in/mohd-farhan-muhamad-fazli-693b7912b/)
ex. [@ShinjiChew](https://www.linkedin.com/in/shinjichew/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/paanjoe/ustazgpt/blob/main/LICENSE) file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [OpenAI Q&A Embedding](https://github.com/openai/openai-cookbook/blob/main/examples/Question_answering_using_embeddings.ipynb)
* [OpenAI Fine-Tuning](https://github.com/openai/openai-cookbook/blob/main/examples/fine-tuned_qa/answers_with_ft.py)