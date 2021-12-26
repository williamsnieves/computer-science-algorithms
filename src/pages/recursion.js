import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Layout from '../components/layout';

export default function Recursion() {
  const recursionCode = `
    function factorial(num) {
      if (num < 2) return 1;
      return num * factorial(num-1);
    }
  `;
  return (
    <Layout>
      <h1 className="px-10 text-6xl font-normal leading-normal mt-0 mb-2 text-gray-600">
        Recursion algorithm
      </h1>
      <div className="p-10">
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {recursionCode}
        </SyntaxHighlighter>
      </div>
      <div className="px-10 pb-10">
        <h3 className="text-3xl font-normal leading-normal mt-0 mb-2 text-gray-600">
          Big O
        </h3>

        <div className="w-1/3 bg-white shadow">
          <ul>
            <li className="p-3  hover:border-l-4 hover:border-gray-600">
              Best: O(n)
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
