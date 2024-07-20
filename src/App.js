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
import TextField from "@mui/material/TextField";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import ReplayIcon from "@mui/icons-material/Replay";
import SearchIcon from "@mui/icons-material/Search";
import LockIcon from "@mui/icons-material/Lock";
import CheckboxComponent from "./Checkbox";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

let questions = [
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/contains-duplicate/",
    question: "Contains Duplicate",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/valid-anagram/",
    question: "Valid Anagram",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/two-sum/",
    question: "Two Sum",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/group-anagrams/",
    question: "Group Anagrams",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/top-k-frequent-elements/",
    question: "Top K Frequent Elements",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/product-of-array-except-self/",
    question: "Product of Array Except Self",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/valid-sudoku/",
    question: "Valid Sudoku",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/encode-and-decode-strings/",
    question: "Encode and Decode Strings",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
    Premium: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/longest-consecutive-sequence/",
    question: "Longest Consecutive Sequence",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/valid-palindrome/",
    question: "Valid Palindrome",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    question: "Two Sum II Input Array Is Sorted",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/3sum/",
    question: "3Sum",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/container-with-most-water/",
    question: "Container With Most Water",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/trapping-rain-water/",
    question: "Trapping Rain Water",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    question: "Best Time to Buy And Sell Stock",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    question: "Longest Substring Without Repeating Characters",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
    question: "Longest Repeating Character Replacement",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/permutation-in-string/",
    question: "Permutation In String",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/minimum-window-substring/",
    question: "Minimum Window Substring",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/sliding-window-maximum/",
    question: "Sliding Window Maximum",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/valid-parentheses/",
    question: "Valid Parentheses",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/min-stack/",
    question: "Min Stack",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    question: "Evaluate Reverse Polish Notation",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/generate-parentheses/",
    question: "Generate Parentheses",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/daily-temperatures/",
    question: "Daily Temperatures",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/car-fleet/",
    question: "Car Fleet",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    question: "Largest Rectangle In Histogram",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/binary-search/",
    question: "Binary Search",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/search-a-2d-matrix/",
    question: "Search a 2D Matrix",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/koko-eating-bananas/",
    question: "Koko Eating Bananas",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    question: "Find Minimum In Rotated Sorted Array",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    question: "Search In Rotated Sorted Array",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/time-based-key-value-store/",
    question: "Time Based Key Value Store",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    question: "Median of Two Sorted Arrays",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/reverse-linked-list/",
    question: "Reverse Linked List",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/merge-two-sorted-lists/",
    question: "Merge Two Sorted Lists",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/reorder-list/",
    question: "Reorder List",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    question: "Remove Nth Node From End of List",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
    question: "Copy List With Random Pointer",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/add-two-numbers/",
    question: "Add Two Numbers",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/linked-list-cycle/",
    question: "Linked List Cycle",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/find-the-duplicate-number/",
    question: "Find The Duplicate Number",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/lru-cache/",
    question: "LRU Cache",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/merge-k-sorted-lists/",
    question: "Merge K Sorted Lists",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    question: "Reverse Nodes In K Group",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/invert-binary-tree/",
    question: "Invert Binary Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    question: "Maximum Depth of Binary Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/diameter-of-binary-tree/",
    question: "Diameter of Binary Tree",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/balanced-binary-tree/",
    question: "Balanced Binary Tree",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/same-tree/",
    question: "Same Tree",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/subtree-of-another-tree/",
    question: "Subtree of Another Tree",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    question: "Lowest Common Ancestor of a Binary Search Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    question: "Binary Tree Level Order Traversal",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/binary-tree-right-side-view/",
    question: "Binary Tree Right Side View",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
    question: "Count Good Nodes In Binary Tree",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/validate-binary-search-tree/",
    question: "Validate Binary Search Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    question: "Kth Smallest Element In a Bst",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    question: "Construct Binary Tree From Preorder And Inorder Traversal",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    question: "Binary Tree Maximum Path Sum",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    question: "Serialize And Deserialize Binary Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
    question: "Implement Trie Prefix Tree",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
    question: "Design Add And Search Words Data Structure",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/word-search-ii/",
    question: "Word Search II",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    question: "Kth Largest Element In a Stream",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/last-stone-weight/",
    question: "Last Stone Weight",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/k-closest-points-to-origin/",
    question: "K Closest Points to Origin",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    question: "Kth Largest Element In An Array",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/task-scheduler/",
    question: "Task Scheduler",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/design-twitter/",
    question: "Design Twitter",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/find-median-from-data-stream/",
    question: "Find Median From Data Stream",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/subsets/",
    question: "Subsets",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/combination-sum/",
    question: "Combination Sum",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/permutations/",
    question: "Permutations",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/subsets-ii/",
    question: "Subsets II",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/combination-sum-ii/",
    question: "Combination Sum II",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/word-search/",
    question: "Word Search",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/palindrome-partitioning/",
    question: "Palindrome Partitioning",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    question: "Letter Combinations of a Phone Number",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/n-queens/",
    question: "N Queens",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/number-of-islands/",
    question: "Number of Islands",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/clone-graph/",
    question: "Clone Graph",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/max-area-of-island/",
    question: "Max Area of Island",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    question: "Pacific Atlantic Water Flow",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/surrounded-regions/",
    question: "Surrounded Regions",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/rotting-oranges/",
    question: "Rotting Oranges",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/walls-and-gates/",
    question: "Walls And Gates",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
    Premium: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/course-schedule/",
    question: "Course Schedule",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/course-schedule-ii/",
    question: "Course Schedule II",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/redundant-connection/",
    question: "Redundant Connection",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    question: "Number of Connected Components In An Undirected Graph",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/graph-valid-tree/",
    question: "Graph Valid Tree",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
    Premium: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/word-ladder/",
    question: "Word Ladder",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/reconstruct-itinerary/",
    question: "Reconstruct Itinerary",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/min-cost-to-connect-all-points/",
    question: "Min Cost to Connect All Points",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/network-delay-time/",
    question: "Network Delay Time",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/swim-in-rising-water/",
    question: "Swim In Rising Water",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/alien-dictionary/",
    question: "Alien Dictionary",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
    Premium: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
    question: "Cheapest Flights Within K Stops",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/climbing-stairs/",
    question: "Climbing Stairs",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/min-cost-climbing-stairs/",
    question: "Min Cost Climbing Stairs",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/house-robber/",
    question: "House Robber",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/house-robber-ii/",
    question: "House Robber II",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/longest-palindromic-substring/",
    question: "Longest Palindromic Substring",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/palindromic-substrings/",
    question: "Palindromic Substrings",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/decode-ways/",
    question: "Decode Ways",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/coin-change/",
    question: "Coin Change",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/maximum-product-subarray/",
    question: "Maximum Product Subarray",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/word-break/",
    question: "Word Break",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/longest-increasing-subsequence/",
    question: "Longest Increasing Subsequence",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/partition-equal-subset-sum/",
    question: "Partition Equal Subset Sum",
    Blind75: false,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/unique-paths/",
    question: "Unique Paths",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/longest-common-subsequence/",
    question: "Longest Common Subsequence",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
    question: "Best Time to Buy And Sell Stock With Cooldown",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/coin-change-ii/",
    question: "Coin Change II",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/target-sum/",
    question: "Target Sum",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/interleaving-string/",
    question: "Interleaving String",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
    question: "Longest Increasing Path In a Matrix",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/distinct-subsequences/",
    question: "Distinct Subsequences",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/edit-distance/",
    question: "Edit Distance",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/burst-balloons/",
    question: "Burst Balloons",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/regular-expression-matching/",
    question: "Regular Expression Matching",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/maximum-subarray/",
    question: "Maximum Subarray",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/jump-game/",
    question: "Jump Game",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/jump-game-ii/",
    question: "Jump Game II",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/gas-station/",
    question: "Gas Station",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/hand-of-straights/",
    question: "Hand of Straights",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/",
    question: "Merge Triplets to Form Target Triplet",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/partition-labels/",
    question: "Partition Labels",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/valid-parenthesis-string/",
    question: "Valid Parenthesis String",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/insert-interval/",
    question: "Insert Interval",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/merge-intervals/",
    question: "Merge Intervals",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/non-overlapping-intervals/",
    question: "Non Overlapping Intervals",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/meeting-rooms/",
    question: "Meeting Rooms",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
    Premium: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/meeting-rooms-ii/",
    question: "Meeting Rooms II",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
    Premium: true,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/minimum-interval-to-include-each-query/",
    question: "Minimum Interval to Include Each Query",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/rotate-image/",
    question: "Rotate Image",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/spiral-matrix/",
    question: "Spiral Matrix",
    Blind75: true,
    Grind75: true,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/set-matrix-zeroes/",
    question: "Set Matrix Zeroes",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/happy-number/",
    question: "Happy Number",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/plus-one/",
    question: "Plus One",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/powx-n/",
    question: "Pow(x n)",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/multiply-strings/",
    question: "Multiply Strings",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/detect-squares/",
    question: "Detect Squares",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/single-number/",
    question: "Single Number",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/number-of-1-bits/",
    question: "Number of 1 Bits",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/counting-bits/",
    question: "Counting Bits",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/reverse-bits/",
    question: "Reverse Bits",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/missing-number/",
    question: "Missing Number",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/sum-of-two-integers/",
    question: "Sum of Two Integers",
    Blind75: true,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/reverse-integer/",
    question: "Reverse Integer",
    Blind75: false,
    Grind75: false,
    Neetcode150: true,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/flood-fill/",
    question: "Flood Fill",
    Blind75: false,
    Grind75: true,
    Neetcode150: false,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/implement-queue-using-stacks/",
    question: "Implement Queue using Stacks",
    Blind75: false,
    Grind75: true,
    Neetcode150: false,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/first-bad-version/",
    question: "First Bad Version",
    Blind75: false,
    Grind75: true,
    Neetcode150: false,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/ransom-note/",
    question: "Ransom Note",
    Blind75: false,
    Grind75: true,
    Neetcode150: false,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/longest-palindrome/",
    question: "Longest Palindrome",
    Blind75: false,
    Grind75: true,
    Neetcode150: false,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/majority-element/",
    question: "Majority Element",
    Blind75: false,
    Grind75: true,
    Neetcode150: false,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/add-binary/",
    question: "Add Binary",
    Blind75: false,
    Grind75: true,
    Neetcode150: false,
  },
  {
    difficulty: "E",
    link: "https://leetcode.com/problems/middle-of-the-linked-list/",
    question: "Middle of the Linked List",
    Blind75: false,
    Grind75: true,
    Neetcode150: false,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/01-matrix/",
    question: "01 Matrix",
    Blind75: false,
    Grind75: true,
    Neetcode150: false,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    question: "Lowest Common Ancestor of a Binary Tree",
    Blind75: false,
    Grind75: true,
    Neetcode150: false,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/accounts-merge/",
    question: "Accounts Merge",
    Blind75: false,
    Grind75: true,
    Neetcode150: false,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/sort-colors/",
    question: "Sort Colors",
    Blind75: false,
    Grind75: true,
    Neetcode150: false,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/string-to-integer-atoi/",
    question: "String to Integer (atoi)",
    Blind75: false,
    Grind75: true,
    Neetcode150: false,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
    question: "Find All Anagrams in a String",
    Blind75: false,
    Grind75: true,
    Neetcode150: false,
  },
  {
    difficulty: "M",
    link: "https://leetcode.com/problems/minimum-height-trees/",
    question: "Minimum Height Trees",
    Blind75: false,
    Grind75: true,
    Neetcode150: false,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/basic-calculator/",
    question: "Basic Calculator",
    Blind75: false,
    Grind75: true,
    Neetcode150: false,
  },
  {
    difficulty: "H",
    link: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/",
    question: "Maximum Profit in Job Scheduling",
    Blind75: false,
    Grind75: true,
    Neetcode150: false,
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

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 300,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 10,
    paddingLeft: 10,
  },
}));

function App() {
  const [list, setList] = useState("all");
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  const [completed, setCompleted] = useState("all");
  const [questionsList, setQuestionsList] = useState(questions);

  useEffect(() => {
    let filteredQuestionsList = questions;

    if (difficulty !== "all") {
      filteredQuestionsList = filteredQuestionsList.filter(
        (question) => question.difficulty === difficulty
      );
    }

    if (list === "blind75") {
      filteredQuestionsList = filteredQuestionsList.filter(
        (question) => question.Blind75
      );
    } else if (list === "grind75") {
      filteredQuestionsList = filteredQuestionsList.filter(
        (question) => question.Grind75
      );
    } else if (list === "neetcode150") {
      filteredQuestionsList = filteredQuestionsList.filter(
        (question) => question.Neetcode150
      );
    }

    if (completed === "C") {
      filteredQuestionsList = filteredQuestionsList.filter(
        (question) => localStorage.getItem(question.question) === "true"
      );
      filteredQuestionsList.forEach((question) =>
        console.log(
          question.question,
          localStorage.getItem(question.question) === "true"
        )
      );
    } else if (completed === "I") {
      filteredQuestionsList = filteredQuestionsList.filter(
        (question) => localStorage.getItem(question.question) !== "true"
      );
    }

    if (search.length > 0) {
      filteredQuestionsList = filteredQuestionsList.filter((question) =>
        question.question.toLowerCase().includes(search.toLowerCase())
      );
    }

    setQuestionsList(filteredQuestionsList);
  }, [list, difficulty, completed, search]);

  const handleListFilterChange = (event) => {
    setList(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleCompletedChange = (event) => {
    setCompleted(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const resetFilters = () => {
    setList("all");
    setDifficulty("all");
    setCompleted("all");
    setSearch("");
    setQuestionsList(questions);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="page">
        <div className="filters-container">
          <h1>Leetcode Megalist</h1>
          <div className="filters">
            <Box className="search">
              <SearchIcon className="search-icon" color="primary" />
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                margin="none"
                size="small"
                value={search}
                onChange={handleSearch}
                fullWidth
              />
            </Box>

            <div className="dropdown-container">
              <Box className="dropdown">
                <FormControl fullWidth size="small">
                  <InputLabel>List</InputLabel>
                  <Select
                    value={list}
                    label="List"
                    onChange={handleListFilterChange}
                  >
                    <MenuItem value={"all"}>All</MenuItem>
                    <MenuItem value={"blind75"}>Blind75</MenuItem>
                    <MenuItem value={"grind75"}>Grind75</MenuItem>
                    <MenuItem value={"neetcode150"}>Neetcode150</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box className="dropdown">
                <FormControl fullWidth size="small">
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

              <Box className="dropdown">
                <FormControl fullWidth size="small">
                  <InputLabel>Completed</InputLabel>
                  <Select
                    value={completed}
                    label="Completed"
                    onChange={handleCompletedChange}
                  >
                    <MenuItem value={"all"}>All</MenuItem>
                    <MenuItem value={"C"}>Complete</MenuItem>
                    <MenuItem value={"I"}>Incomplete</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <LightTooltip
                arrow
                title="Reset Filter and Search"
                placement="top"
              >
                <Button variant="contained" onClick={resetFilters}>
                  <ReplayIcon />
                </Button>
              </LightTooltip>
            </div>
          </div>
        </div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" width={"30%"}>
                  <span className="category-title">Completed</span>
                </TableCell>
                <TableCell align="left" width={"40%"}>
                  <span className="category-title">Question</span>
                </TableCell>
                <TableCell align="center" width={"30%"}>
                  <span className="category-title">Difficulty</span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {questionsList.map((question) => (
                <TableRow key={question.question}>
                  <TableCell align="center">
                    <CheckboxComponent question={question.question} />
                  </TableCell>
                  <TableCell align="left">
                    <div className="question-row">
                      <a
                        href={question.link}
                        target="_blank"
                        rel="noreferrer"
                        className="question-link"
                      >
                        {question.question}
                      </a>
                      {question.Premium && (
                        <LightTooltip
                          arrow
                          title="Leetcode Premium Question"
                          placement="right"
                        >
                          <LockIcon className="lock-icon" />{" "}
                        </LightTooltip>
                      )}
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <p
                      className={`difficulty-tag ${
                        difficultyMapping[question.difficulty]
                      }`}
                    >
                      {difficultyMapping[question.difficulty]}
                    </p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
