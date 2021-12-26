import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Layout from '../components/layout';

export default function InsertionSort() {
  const insertionSortCode = `
    function insertionSort(nums) {
      for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
          if (nums[i] < nums[j]) {
            let spliced = nums.splice(i, 1);
            nums.splice(j, 0, spliced[0]);
          }
        }
      }
    
      return nums;
    }
  `;
  return (
    <Layout>
      <h1 className="px-10 text-6xl font-normal leading-normal mt-0 mb-2 text-gray-600">
        Insertion sort algorithm
      </h1>
      <div className="p-10">
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {insertionSortCode}
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
            <li className="p-3 hover:border-l-4 hover:border-gray-600 ">
              Average: O(n^2)
            </li>
            <li className="p-3 hover:border-l-4 hover:border-gray-600">
              Worst: O(n^2)
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
