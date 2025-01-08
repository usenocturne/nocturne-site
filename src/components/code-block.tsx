'use client'

import Prism from 'prismjs'
import { useEffect } from 'react'

interface CodeBlockProps {
  code: string
  activeTab?: string
}

export default function CodeBlock({
  code,
  activeTab = 'default',
}: CodeBlockProps) {
  useEffect(() => {
    Prism.highlightAll()
  }, [code])

  return (
    <div className="px-2 pb-14">
      <style>
        {`
          /* Global override for Prism styles */
          :not(pre) > code[class*="language-"],
          pre[class*="language-"],
          code[class*="language-"],
          pre[class*="language-"],
          code[class*="language-"] *,
          pre[class*="language-"] * {
            background: none !important;
            text-shadow: none !important;
          }

          @media (prefers-color-scheme: light) {
          /* Light theme styles */
          code[class*="language-"], pre[class*="language-"] {
            color: #383A42;
            background: none !important;
            text-shadow: none !important;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 0.875rem;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            word-wrap: normal;
            line-height: 1.5;
          }

          /* Override token colors for markdown */
          pre.language-markdown .token,
          pre.language-markdown .token.bold,
          pre.language-markdown .token.italic,
          pre.language-markdown .token.keyword,
          pre.language-markdown .token.operator,
          pre.language-markdown .token.punctuation,
          pre.language-markdown .token.string,
          pre.language-markdown .token.number,
          pre.language-markdown .token.comment {
            color: #383A42 !important;
            font-style: normal !important;
            font-weight: normal !important;
          }

          .token {
            text-shadow: none !important;
            background: none !important;
          }

          /* Regular syntax highlighting for non-markdown */
          pre:not(.language-markdown) {
            .token.comment,
            .token.prolog,
            .token.doctype,
            .token.cdata {
              color: #A0A1A7;
              font-style: italic;
            }

            .token.function {
              color: #4078F2;
            }

            .token.keyword {
              color: #A626A4;
            }

            .token.string {
              color: #50A14F;
            }

            .token.operator {
              color: #383A42;
            }

            .token.number {
              color: #986801;
            }

            .token.property {
              color: #4078F2;
            }

            .token.class-name {
              color: #C18401;
            }

            .token.punctuation,
            .token.operator {
              color: #383A42;
            }
          }
          }

          @media (prefers-color-scheme: dark) {
          /* Dark theme styles */
          code[class*="language-"],
          pre[class*="language-"] {
            color: #E5E7EB;
            background: none !important;
            text-shadow: none !important;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 0.875rem;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            word-wrap: normal;
            line-height: 1.5;
          }

          /* Override token colors for markdown */
          pre.language-markdown .token,
          pre.language-markdown .token.bold,
          pre.language-markdown .token.italic,
          pre.language-markdown .token.keyword,
          pre.language-markdown .token.operator,
          pre.language-markdown .token.punctuation,
          pre.language-markdown .token.string,
          pre.language-markdown .token.number,
          pre.language-markdown .token.comment {
            color: #E5E7EB !important;
            font-style: normal !important;
            font-weight: normal !important;
          }

          .token {
            text-shadow: none !important;
            background: none !important;
          }

          /* Regular syntax highlighting for non-markdown */
          pre:not(.language-markdown) {
            .token.comment,
            .token.prolog,
            .token.doctype,
            .token.cdata {
              color: #6B7280;
              font-style: italic;
            }

            .token.function {
              color: #60A5FA;
            }

            .token.keyword {
              color: #F472B6;
            }

            .token.string {
              color: #34D399;
            }

            .token.operator {
              color: #E5E7EB;
            }

            .token.number {
              color: #FBBF24;
            }

            .token.property {
              color: #60A5FA;
            }

            .token.class-name {
              color: #FBBF24;
            }

            .token.punctuation,
            .token.operator {
              color: #E5E7EB;
            }
          }
          }
        `}
      </style>
      <pre
        className={`language-${activeTab === 'readme' ? 'markdown' : 'javascript'}`}
      >
        <code
          className={`language-${activeTab === 'readme' ? 'markdown' : 'javascript'}`}
        >
          {code}
        </code>
      </pre>
    </div>
  )
}
