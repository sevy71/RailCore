// src/components/CompetencyQuestionModule.tsx
import React, { useState } from 'react'
import Card from './common/Card'
import Button from './common/Button'

interface CompetencyQuestionModuleProps {
  question: string
  assessment: string
  tip: string
}

const CompetencyQuestionModule: React.FC<CompetencyQuestionModuleProps> = ({
  question,
  assessment,
  tip,
}) => {
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGetFeedback = async () => {
    if (!userAnswer.trim()) {
      setError('Please write your answer before getting feedback.')
      return
    }
    setError(null)
    setFeedback(null)
    setIsLoading(true)

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, userAnswer, assessment, tip }),
      })

      if (!res.ok) {
        // try JSON error first
        let msg = `Server responded with ${res.status}`
        const body = await res.text()
        try {
          const json = JSON.parse(body)
          msg = json.error || msg
        } catch {
          // fallback to plain-text snippet
          msg = `${msg}. ${body.substring(0, 100)}…`
        }
        throw new Error(msg)
      }

      const { text } = await res.json()
      setFeedback(text)
    } catch (e: any) {
      console.error('⚠️ Feedback API error:', e)
      setError(`API Error: ${e.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="shadow-lg border-t-4 border-railway-yellow-green">
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold font-condensed text-brand-primary mb-2">
          {question}
        </h3>
        <div className="text-sm text-gray-600 italic mb-4 space-y-1">
          <p><strong>What we’re assessing:</strong> {assessment}</p>
          <p>👉 <strong>Tip:</strong> {tip}</p>
        </div>

        <label htmlFor="user-answer" className="block font-semibold mb-2">
          Your Practice Answer:
        </label>
        <textarea
          id="user-answer"
          rows={5}
          className="w-full px-4 py-2.5 border rounded-md focus:ring-2 focus:ring-railway-green focus:border-railway-green transition"
          value={userAnswer}
          onChange={e => setUserAnswer(e.target.value)}
          placeholder="Write your answer here…"
        />

        <div className="mt-4">
          <Button variant="secondary" onClick={handleGetFeedback} disabled={isLoading}>
            {isLoading ? 'Analyzing...' : 'Get AI Feedback'}
          </Button>
        </div>

        {error && (
          <p className="mt-4 text-red-600 bg-red-100 p-3 rounded-md">{error}</p>
        )}

        {feedback && (
          <div className="mt-6 p-4 border-l-4 border-blue-400 bg-blue-50 rounded-r-md">
            <h4 className="font-semibold text-blue-800 mb-2">
              🤖 AI Coach Feedback:
            </h4>
            <div
              className="text-blue-900 whitespace-pre-wrap text-sm"
              dangerouslySetInnerHTML={{
                __html: feedback
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\n/g, '<br/>'),
              }}
            />
          </div>
        )}
      </div>
    </Card>
  )
}

export default CompetencyQuestionModule