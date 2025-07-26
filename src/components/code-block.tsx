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
          :not(pre) > code[class*="language-"],
          pre[class*="language-"],
          code[class*="language-"],
          code[class*="language-"] *,
          pre[class*="language-"] * {
            background: none !important;
            text-shadow: none !important;
          }

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

          pre.language-markdown .token {
            color: #383A42 !important;
            font-style: normal !important;
            font-weight: normal !important;
          }

          pre:not(.language-markdown) .token.comment,
          pre:not(.language-markdown) .token.prolog,
          pre:not(.language-markdown) .token.doctype,
          pre:not(.language-markdown) .token.cdata {
            color: #A0A1A7;
            font-style: italic;
          }

          pre:not(.language-markdown) .token.function {
            color: #4078F2;
          }

          pre:not(.language-markdown) .token.keyword {
            color: #A626A4;
          }

          pre:not(.language-markdown) .token.string {
            color: #50A14F;
          }

          pre:not(.language-markdown) .token.number {
            color: #986801;
          }

          pre:not(.language-markdown) .token.property {
            color: #4078F2;
          }

          pre:not(.language-markdown) .token.class-name {
            color: #C18401;
          }

          pre:not(.language-markdown) .token.punctuation,
          pre:not(.language-markdown) .token.operator {
            color: #383A42;
          }

          .dark code[class*="language-"],
          .dark pre[class*="language-"] {
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

          .dark pre.language-markdown .token {
            color: #E5E7EB !important;
            font-style: normal !important;
            font-weight: normal !important;
          }

          .dark pre:not(.language-markdown) .token.comment,
          .dark pre:not(.language-markdown) .token.prolog,
          .dark pre:not(.language-markdown) .token.doctype,
          .dark pre:not(.language-markdown) .token.cdata {
            color: #6B7280;
            font-style: italic;
          }

          .dark pre:not(.language-markdown) .token.function {
            color: #60A5FA;
          }

          .dark pre:not(.language-markdown) .token.keyword {
            color: #F472B6;
          }

          .dark pre:not(.language-markdown) .token.string {
            color: #34D399;
          }

          .dark pre:not(.language-markdown) .token.number {
            color: #FBBF24;
          }

          .dark pre:not(.language-markdown) .token.property {
            color: #60A5FA;
          }

          .dark pre:not(.language-markdown) .token.class-name {
            color: #FBBF24;
          }

          .dark pre:not(.language-markdown) .token.punctuation,
          .dark pre:not(.language-markdown) .token.operator {
            color: #E5E7EB;
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