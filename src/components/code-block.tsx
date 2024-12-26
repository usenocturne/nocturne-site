'use client'

import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import { useEffect } from 'react'

interface CodeBlockProps {
  code: string
}

export default function CodeBlock({ code }: CodeBlockProps) {
  useEffect(() => {
    Prism.highlightAll()
  }, [code])

  return (
    <div className="px-2 pb-14">
      <style>
        {`
          /* Light theme overrides */
          code[class*="language-"], pre[class*="language-"] {
            color: #383A42;
            background: none;
            text-shadow: none;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 0.875rem;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            word-wrap: normal;
            line-height: 1.5;
          }

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
            background: none;  /* Remove the background */
          }

          .token {
            background: none !important;  /* Remove background from all tokens */
          }
        `}
      </style>
      <pre className="language-javascript">
        <code className="language-javascript">{code}</code>
      </pre>
    </div>
  )
}
