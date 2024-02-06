import "./App.css";
import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckboxComponent from "./Checkbox";

let questions = [
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/contains-duplicate/",
    question: "Contains Duplicate",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/valid-anagram/",
    question: "Valid Anagram",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/two-sum/",
    question: "Two Sum",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/group-anagrams/",
    question: "Group Anagrams",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/top-k-frequent-elements/",
    question: "Top K Frequent Elements",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/product-of-array-except-self/",
    question: "Product of Array Except Self",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/valid-sudoku/",
    question: "Valid Sudoku",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/encode-and-decode-strings/",
    question: "Encode and Decode Strings",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/longest-consecutive-sequence/",
    question: "Longest Consecutive Sequence",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/valid-palindrome/",
    question: "Valid Palindrome",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    question: "Two Sum II Input Array Is Sorted",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/3sum/",
    question: "3Sum",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/container-with-most-water/",
    question: "Container With Most Water",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/trapping-rain-water/",
    question: "Trapping Rain Water",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    question: "Best Time to Buy And Sell Stock",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    question: "Longest Substring Without Repeating Characters",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
    question: "Longest Repeating Character Replacement",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/permutation-in-string/",
    question: "Permutation In String",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/minimum-window-substring/",
    question: "Minimum Window Substring",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/sliding-window-maximum/",
    question: "Sliding Window Maximum",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/valid-parentheses/",
    question: "Valid Parentheses",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/min-stack/",
    question: "Min Stack",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    question: "Evaluate Reverse Polish Notation",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/generate-parentheses/",
    question: "Generate Parentheses",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/min-stack/",
    question: "Daily Temperatures",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/car-fleet/",
    question: "Car Fleet",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    question: "Largest Rectangle In Histogram",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/binary-search/",
    question: "Binary Search",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/search-a-2d-matrix/",
    question: "Search a 2D Matrix",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/koko-eating-bananas/",
    question: "Koko Eating Bananas",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    question: "Find Minimum In Rotated Sorted Array",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    question: "Search In Rotated Sorted Array",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/time-based-key-value-store/",
    question: "Time Based Key Value Store",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    question: "Median of Two Sorted Arrays",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/reverse-linked-list/",
    question: "Reverse Linked List",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/merge-two-sorted-lists/",
    question: "Merge Two Sorted Lists",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/reorder-list/",
    question: "Reorder List",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    question: "Remove Nth Node From End of List",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
    question: "Copy List With Random Pointer",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/add-two-numbers/",
    question: "Add Two Numbers",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/linked-list-cycle/",
    question: "Linked List Cycle",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/find-the-duplicate-number/",
    question: "Find The Duplicate Number",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/lru-cache/",
    question: "LRU Cache",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/merge-k-sorted-lists/",
    question: "Merge K Sorted Lists",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    question: "Reverse Nodes In K Group",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/invert-binary-tree/",
    question: "Invert Binary Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    question: "Maximum Depth of Binary Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/diameter-of-binary-tree/",
    question: "Diameter of Binary Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/balanced-binary-tree/",
    question: "Balanced Binary Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/same-tree/",
    question: "Same Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/subtree-of-another-tree/",
    question: "Subtree of Another Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    question: "Lowest Common Ancestor of a Binary Search Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    question: "Binary Tree Level Order Traversal",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/binary-tree-right-side-view/",
    question: "Binary Tree Right Side View",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
    question: "Count Good Nodes In Binary Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/validate-binary-search-tree/",
    question: "Validate Binary Search Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    question: "Kth Smallest Element In a Bst",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    question: "Construct Binary Tree From Preorder And Inorder Traversal",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    question: "Binary Tree Maximum Path Sum",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    question: "Serialize And Deserialize Binary Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
    question: "Implement Trie Prefix Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
    question: "Design Add And Search Words Data Structure",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/word-search-ii/",
    question: "Word Search II",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    question: "Kth Largest Element In a Stream",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/last-stone-weight/",
    question: "Last Stone Weight",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/k-closest-points-to-origin/",
    question: "K Closest Points to Origin",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    question: "Kth Largest Element In An Array",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/task-scheduler/",
    question: "Task Scheduler",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/design-twitter/",
    question: "Design Twitter",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/find-median-from-data-stream/",
    question: "Find Median From Data Stream",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/subsets/",
    question: "Subsets",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/combination-sum/",
    question: "Combination Sum",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/permutations/",
    question: "Permutations",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/subsets-ii/",
    question: "Subsets II",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/combination-sum-ii/",
    question: "Combination Sum II",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/word-search/",
    question: "Word Search",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/palindrome-partitioning/",
    question: "Palindrome Partitioning",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    question: "Letter Combinations of a Phone Number",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/n-queens/",
    question: "N Queens",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/number-of-islands/",
    question: "Number of Islands",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/clone-graph/",
    question: "Clone Graph",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/max-area-of-island/",
    question: "Max Area of Island",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    question: "Pacific Atlantic Water Flow",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/surrounded-regions/",
    question: "Surrounded Regions",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/rotting-oranges/",
    question: "Rotting Oranges",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: true,
    difficulty: "M",
    link: "https://leetcode.com/problems/walls-and-gates/",
    question: "Walls And Gates",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/course-schedule/",
    question: "Course Schedule",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/course-schedule-ii/",
    question: "Course Schedule II",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/redundant-connection/",
    question: "Redundant Connection",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: true,
    difficulty: "M",
    link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    question: "Number of Connected Components In An Undirected Graph",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: true,
    difficulty: "M",
    link: "https://leetcode.com/problems/graph-valid-tree/",
    question: "Graph Valid Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/word-ladder/",
    question: "Word Ladder",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/reconstruct-itinerary/",
    question: "Reconstruct Itinerary",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/min-cost-to-connect-all-points/",
    question: "Min Cost to Connect All Points",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/network-delay-time/",
    question: "Network Delay Time",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/swim-in-rising-water/",
    question: "Swim In Rising Water",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: true,
    difficulty: "H",
    link: "https://leetcode.com/problems/alien-dictionary/",
    question: "Alien Dictionary",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
    question: "Cheapest Flights Within K Stops",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/climbing-stairs/",
    question: "Climbing Stairs",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/min-cost-climbing-stairs/",
    question: "Min Cost Climbing Stairs",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/house-robber/",
    question: "House Robber",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/house-robber-ii/",
    question: "House Robber II",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/longest-palindromic-substring/",
    question: "Longest Palindromic Substring",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/palindromic-substrings/",
    question: "Palindromic Substrings",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/decode-ways/",
    question: "Decode Ways",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/coin-change/",
    question: "Coin Change",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/maximum-product-subarray/",
    question: "Maximum Product Subarray",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/word-break/",
    question: "Word Break",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/longest-increasing-subsequence/",
    question: "Longest Increasing Subsequence",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/partition-equal-subset-sum/",
    question: "Partition Equal Subset Sum",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/unique-paths/",
    question: "Unique Paths",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/longest-common-subsequence/",
    question: "Longest Common Subsequence",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
    question: "Best Time to Buy And Sell Stock With Cooldown",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/coin-change-ii/",
    question: "Coin Change II",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/target-sum/",
    question: "Target Sum",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/interleaving-string/",
    question: "Interleaving String",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
    question: "Longest Increasing Path In a Matrix",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/distinct-subsequences/",
    question: "Distinct Subsequences",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/edit-distance/",
    question: "Edit Distance",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/burst-balloons/",
    question: "Burst Balloons",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/regular-expression-matching/",
    question: "Regular Expression Matching",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/maximum-subarray/",
    question: "Maximum Subarray",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/jump-game/",
    question: "Jump Game",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/jump-game-ii/",
    question: "Jump Game II",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/gas-station/",
    question: "Gas Station",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/hand-of-straights/",
    question: "Hand of Straights",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/",
    question: "Merge Triplets to Form Target Triplet",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/partition-labels/",
    question: "Partition Labels",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/valid-parenthesis-string/",
    question: "Valid Parenthesis String",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/insert-interval/",
    question: "Insert Interval",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/merge-intervals/",
    question: "Merge Intervals",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/non-overlapping-intervals/",
    question: "Non Overlapping Intervals",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: true,
    difficulty: "E",
    link: "https://leetcode.com/problems/meeting-rooms/",
    question: "Meeting Rooms",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: true,
    difficulty: "M",
    link: "https://leetcode.com/problems/meeting-rooms-ii/",
    question: "Meeting Rooms II",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "H",
    link: "https://leetcode.com/problems/minimum-interval-to-include-each-query/",
    question: "Minimum Interval to Include Each Query",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/rotate-image/",
    question: "Rotate Image",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/spiral-matrix/",
    question: "Spiral Matrix",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/set-matrix-zeroes/",
    question: "Set Matrix Zeroes",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/happy-number/",
    question: "Happy Number",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/plus-one/",
    question: "Plus One",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/powx-n/",
    question: "Pow(x, n)",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/multiply-strings/",
    question: "Multiply Strings",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/detect-squares/",
    question: "Detect Squares",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/single-number/",
    question: "Single Number",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/number-of-1-bits/",
    question: "Number of 1 Bits",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/counting-bits/",
    question: "Counting Bits",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/reverse-bits/",
    question: "Reverse Bits",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "E",
    link: "https://leetcode.com/problems/missing-number/",
    question: "Missing Number",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/sum-of-two-integers/",
    question: "Sum of Two Integers",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    premium: false,
    difficulty: "M",
    link: "https://leetcode.com/problems/reverse-integer/",
    question: "Reverse Integer",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
];

const sortQuestions = (a, b) => {
  if (a.question < b.question) {
    return -1;
  }

  if (a.question > b.question) {
    return 1;
  }

  return 0;
};

questions.sort(sortQuestions);

const difficultyMapping = {
  E: "Easy",
  M: "Medium",
  H: "Hard",
};

function App() {
  const [list, setList] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [questionsList, setQuestionsList] = useState(questions);

  useEffect(() => {
    let filteredQuestionsList = questions;

    if (difficulty !== "all") {
      filteredQuestionsList = filteredQuestionsList.filter(
        (question) => question.difficulty === difficulty
      );
    }

    if (list !== "all") {
      if (list === "blind75") {
        filteredQuestionsList = filteredQuestionsList.filter(
          (question) => question.Blind75
        );
      } else if (list === "grind75") {
        filteredQuestionsList = filteredQuestionsList.filter(
          (question) => question.Grind75
        );
      } else {
        filteredQuestionsList = filteredQuestionsList.filter(
          (question) => question.Neetcode150
        );
      }
    }

    setQuestionsList(filteredQuestionsList);
  }, [list, difficulty]);

  const handleListFilterChange = (event) => {
    setList(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const resetFilters = () => {
    setList("all");
    setDifficulty("all");
    setQuestionsList(questions);
  };

  return (
    <div>
      <h1> Leetcode Megalist</h1>
      <div>
        <Box>
          <FormControl fullWidth>
            <InputLabel>Question List</InputLabel>
            <Select
              value={list}
              label="Question List"
              onChange={handleListFilterChange}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"blind75"}>Blind75</MenuItem>
              <MenuItem value={"grind75"}>Grind75</MenuItem>
              <MenuItem value={"neetcode150"}>Neetcode150</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <FormControl fullWidth>
            <InputLabel>Difficulty</InputLabel>
            <Select
              value={difficulty}
              label="Difficulty"
              onChange={handleDifficultyChange}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"E"}>Easy</MenuItem>
              <MenuItem value={"M"}>Medium</MenuItem>
              <MenuItem value={"H"}>Hard</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button variant="contained" onClick={resetFilters}>
          <DeleteIcon />
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Completed</TableCell>
              <TableCell>Question</TableCell>
              <TableCell>Difficulty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questionsList.map((question, index) => (
              <TableRow key={index}>
                <TableCell>
                  <CheckboxComponent index={index} />
                </TableCell>
                <TableCell>
                  <a href={question.link} target={"_blank"}>
                    {question.question}
                  </a>
                </TableCell>
                <TableCell>{difficultyMapping[question.difficulty]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
