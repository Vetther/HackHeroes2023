import { OpenAIStream, StreamingTextResponse } from "ai"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})
export const runtime = "edge"

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json()

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "user",
        content: `Z danych pytań stwórz raport w którym napiszesz mi jakie zagadnienia i kategorie mam poworzyć, nie uzywaj treści pytan, pytania: ${prompt}`,
      },
    ],
    max_tokens: 400,
  })

  const stream = OpenAIStream(response)

  return new StreamingTextResponse(stream)
}
