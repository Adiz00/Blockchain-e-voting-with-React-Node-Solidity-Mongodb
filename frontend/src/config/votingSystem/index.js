import { ethers } from "ethers";

// const CONTRACT_ADDRESS = "0xecb043016942dfc7f714e224a681d2a6d568fa61"; // Replace with your deployed contract address
// const ABI = [
//         {
//             "inputs": [],
//             "stateMutability": "nonpayable",
//             "type": "constructor"
//         },
//         {
//             "anonymous": false,
//             "inputs": [
//                 {
//                     "indexed": false,
//                     "internalType": "string",
//                     "name": "name",
//                     "type": "string"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "address",
//                     "name": "candidateAddress",
//                     "type": "address"
//                 }
//             ],
//             "name": "CandidateRegistered",
//             "type": "event"
//         },
//         {
//             "anonymous": false,
//             "inputs": [
//                 {
//                     "indexed": false,
//                     "internalType": "string",
//                     "name": "winnerName",
//                     "type": "string"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "uint256",
//                     "name": "highestVotes",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "ElectionEnded",
//             "type": "event"
//         },
//         {
//             "anonymous": false,
//             "inputs": [
//                 {
//                     "indexed": false,
//                     "internalType": "uint256",
//                     "name": "startTime",
//                     "type": "uint256"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "uint256",
//                     "name": "endTime",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "ElectionStarted",
//             "type": "event"
//         },
//         {
//             "anonymous": false,
//             "inputs": [
//                 {
//                     "indexed": false,
//                     "internalType": "address",
//                     "name": "candidate",
//                     "type": "address"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "uint256",
//                     "name": "voteCount",
//                     "type": "uint256"
//                 },
//                 {
//                     "components": [
//                         {
//                             "internalType": "string",
//                             "name": "name",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "voteCount",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "address",
//                             "name": "candidateAddress",
//                             "type": "address"
//                         }
//                     ],
//                     "indexed": false,
//                     "internalType": "struct VotingSystem.Candidate[]",
//                     "name": "",
//                     "type": "tuple[]"
//                 }
//             ],
//             "name": "VoteCast",
//             "type": "event"
//         },
//         {
//             "inputs": [],
//             "name": "admin",
//             "outputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "candidates",
//             "outputs": [
//                 {
//                     "internalType": "string",
//                     "name": "name",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "voteCount",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "address",
//                     "name": "candidateAddress",
//                     "type": "address"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "endElection",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "endTime",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "index",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "getCandidate",
//             "outputs": [
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "getTotalCandidates",
//             "outputs": [
//                 {
//                     "components": [
//                         {
//                             "internalType": "string",
//                             "name": "name",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "voteCount",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "address",
//                             "name": "candidateAddress",
//                             "type": "address"
//                         }
//                     ],
//                     "internalType": "struct VotingSystem.Candidate[]",
//                     "name": "",
//                     "type": "tuple[]"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "getTotalCandidatesLength",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "getWinner",
//             "outputs": [
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "isElectionActive",
//             "outputs": [
//                 {
//                     "internalType": "bool",
//                     "name": "",
//                     "type": "bool"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "string",
//                     "name": "_name",
//                     "type": "string"
//                 }
//             ],
//             "name": "registerCandidate",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "name": "registeredCandidates",
//             "outputs": [
//                 {
//                     "internalType": "string",
//                     "name": "name",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "voteCount",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "address",
//                     "name": "candidateAddress",
//                     "type": "address"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_startTime",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "_endTime",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "startElection",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "startTime",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "_candidateAddress",
//                     "type": "address"
//                 }
//             ],
//             "name": "vote",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "name": "voters",
//             "outputs": [
//                 {
//                     "internalType": "bool",
//                     "name": "hasVoted",
//                     "type": "bool"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         }
//     ]
// ;

// const CONTRACT_ADDRESS = '0xbd399f5017107301f916e305a67c7a716be238e4';
// const CONTRACT_ADDRESS = '0x94897EefA462Bd3A56F118E112Eb89e9Da00A522';
// const CONTRACT_ADDRESS = '0x26f3b3367a5c1572e2feaa20ad243b868bc70801';
const CONTRACT_ADDRESS = '0x32c021bce2bc69a64a1ae93947a60955dae8ba90';

// const ABI = [
// 		{
// 			"inputs": [],
// 			"stateMutability": "nonpayable",
// 			"type": "constructor"
// 		},
// 		{
// 			"anonymous": false,
// 			"inputs": [
// 				{
// 					"indexed": false,
// 					"internalType": "string",
// 					"name": "name",
// 					"type": "string"
// 				},
// 				{
// 					"indexed": false,
// 					"internalType": "address",
// 					"name": "candidateAddress",
// 					"type": "address"
// 				}
// 			],
// 			"name": "CandidateRegistered",
// 			"type": "event"
// 		},
// 		{
// 			"anonymous": false,
// 			"inputs": [
// 				{
// 					"indexed": false,
// 					"internalType": "string",
// 					"name": "winnerName",
// 					"type": "string"
// 				},
// 				{
// 					"indexed": false,
// 					"internalType": "uint256",
// 					"name": "highestVotes",
// 					"type": "uint256"
// 				}
// 			],
// 			"name": "ElectionEnded",
// 			"type": "event"
// 		},
// 		{
// 			"anonymous": false,
// 			"inputs": [
// 				{
// 					"indexed": false,
// 					"internalType": "uint256",
// 					"name": "startTime",
// 					"type": "uint256"
// 				},
// 				{
// 					"indexed": false,
// 					"internalType": "uint256",
// 					"name": "endTime",
// 					"type": "uint256"
// 				}
// 			],
// 			"name": "ElectionStarted",
// 			"type": "event"
// 		},
// 		{
// 			"anonymous": false,
// 			"inputs": [
// 				{
// 					"indexed": false,
// 					"internalType": "bytes32",
// 					"name": "candidate",
// 					"type": "bytes32"
// 				},
// 				{
// 					"indexed": false,
// 					"internalType": "uint256",
// 					"name": "voteCount",
// 					"type": "uint256"
// 				},
// 				{
// 					"components": [
// 						{
// 							"internalType": "string",
// 							"name": "name",
// 							"type": "string"
// 						},
// 						{
// 							"internalType": "uint256",
// 							"name": "voteCount",
// 							"type": "uint256"
// 						},
// 						{
// 							"internalType": "bytes32",
// 							"name": "candidateAddress",
// 							"type": "bytes32"
// 						}
// 					],
// 					"indexed": false,
// 					"internalType": "struct VotingSystem.Candidate[]",
// 					"name": "candidates",
// 					"type": "tuple[]"
// 				}
// 			],
// 			"name": "VoteCast",
// 			"type": "event"
// 		},
// 		{
// 			"inputs": [],
// 			"name": "admin",
// 			"outputs": [
// 				{
// 					"internalType": "bytes32",
// 					"name": "",
// 					"type": "bytes32"
// 				}
// 			],
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "",
// 					"type": "uint256"
// 				}
// 			],
// 			"name": "candidates",
// 			"outputs": [
// 				{
// 					"internalType": "string",
// 					"name": "name",
// 					"type": "string"
// 				},
// 				{
// 					"internalType": "uint256",
// 					"name": "voteCount",
// 					"type": "uint256"
// 				},
// 				{
// 					"internalType": "bytes32",
// 					"name": "candidateAddress",
// 					"type": "bytes32"
// 				}
// 			],
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [],
// 			"name": "endElection",
// 			"outputs": [],
// 			"stateMutability": "nonpayable",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [],
// 			"name": "endTime",
// 			"outputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "",
// 					"type": "uint256"
// 				}
// 			],
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "index",
// 					"type": "uint256"
// 				}
// 			],
// 			"name": "getCandidate",
// 			"outputs": [
// 				{
// 					"internalType": "string",
// 					"name": "",
// 					"type": "string"
// 				},
// 				{
// 					"internalType": "uint256",
// 					"name": "",
// 					"type": "uint256"
// 				},
// 				{
// 					"internalType": "bytes32",
// 					"name": "",
// 					"type": "bytes32"
// 				}
// 			],
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [],
// 			"name": "getTotalCandidates",
// 			"outputs": [
// 				{
// 					"components": [
// 						{
// 							"internalType": "string",
// 							"name": "name",
// 							"type": "string"
// 						},
// 						{
// 							"internalType": "uint256",
// 							"name": "voteCount",
// 							"type": "uint256"
// 						},
// 						{
// 							"internalType": "bytes32",
// 							"name": "candidateAddress",
// 							"type": "bytes32"
// 						}
// 					],
// 					"internalType": "struct VotingSystem.Candidate[]",
// 					"name": "",
// 					"type": "tuple[]"
// 				}
// 			],
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [],
// 			"name": "getTotalCandidatesLength",
// 			"outputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "",
// 					"type": "uint256"
// 				}
// 			],
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [],
// 			"name": "getWinner",
// 			"outputs": [
// 				{
// 					"internalType": "string",
// 					"name": "",
// 					"type": "string"
// 				},
// 				{
// 					"internalType": "uint256",
// 					"name": "",
// 					"type": "uint256"
// 				}
// 			],
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [],
// 			"name": "isElectionActive",
// 			"outputs": [
// 				{
// 					"internalType": "bool",
// 					"name": "",
// 					"type": "bool"
// 				}
// 			],
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [
// 				{
// 					"internalType": "string",
// 					"name": "_name",
// 					"type": "string"
// 				}
// 			],
// 			"name": "registerCandidate",
// 			"outputs": [],
// 			"stateMutability": "nonpayable",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [
// 				{
// 					"internalType": "bytes32",
// 					"name": "",
// 					"type": "bytes32"
// 				}
// 			],
// 			"name": "registeredCandidates",
// 			"outputs": [
// 				{
// 					"internalType": "string",
// 					"name": "name",
// 					"type": "string"
// 				},
// 				{
// 					"internalType": "uint256",
// 					"name": "voteCount",
// 					"type": "uint256"
// 				},
// 				{
// 					"internalType": "bytes32",
// 					"name": "candidateAddress",
// 					"type": "bytes32"
// 				}
// 			],
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "_startTime",
// 					"type": "uint256"
// 				},
// 				{
// 					"internalType": "uint256",
// 					"name": "_endTime",
// 					"type": "uint256"
// 				}
// 			],
// 			"name": "startElection",
// 			"outputs": [],
// 			"stateMutability": "nonpayable",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [],
// 			"name": "startTime",
// 			"outputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "",
// 					"type": "uint256"
// 				}
// 			],
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [
// 				{
// 					"internalType": "bytes32",
// 					"name": "_hashedCandidateAddress",
// 					"type": "bytes32"
// 				}
// 			],
// 			"name": "vote",
// 			"outputs": [],
// 			"stateMutability": "nonpayable",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [
// 				{
// 					"internalType": "bytes32",
// 					"name": "",
// 					"type": "bytes32"
// 				}
// 			],
// 			"name": "voters",
// 			"outputs": [
// 				{
// 					"internalType": "bool",
// 					"name": "",
// 					"type": "bool"
// 				}
// 			],
// 			"stateMutability": "view",
// 			"type": "function"
// 		}
	
// ];
 
const ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "candidateAddress",
				"type": "address"
			}
		],
		"name": "CandidateRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "winnerName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "highestVotes",
				"type": "uint256"
			}
		],
		"name": "ElectionEnded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			}
		],
		"name": "ElectionStarted",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "endElection",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "registerCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_endTime",
				"type": "uint256"
			}
		],
		"name": "startElection",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_candidateAddress",
				"type": "address"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "candidate",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "voteCount",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "candidateAddress",
						"type": "address"
					}
				],
				"indexed": false,
				"internalType": "struct VotingSystem.Candidate[]",
				"name": "candidates",
				"type": "tuple[]"
			}
		],
		"name": "VoteCast",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "candidateAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getCandidate",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalCandidates",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "voteCount",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "candidateAddress",
						"type": "address"
					}
				],
				"internalType": "struct VotingSystem.Candidate[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalCandidatesLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWinner",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isElectionActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "registeredCandidates",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "candidateAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const SEPOLIA_CHAIN_ID_HEX = "0xaa36a7"; // 11155111 in hex



// const getContractInstance = async () => {
//     // alert("getContractInstance");
//   if (!window.ethereum) {
//     alert("MetaMask is not installed");
//     return;
//   }

//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   // Check if any accounts are connected
//   const accounts = await provider.listAccounts();
//   if (accounts.length === 0) {
//     alert("No connected accounts. Please connect your wallet.");
//     return;
//   }

//   const signer = provider.getSigner();
//   const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

//   return contract;
// };

// export const listenForElectionEvents = async (onVoteCast, onElectionStart) => {
//     const contract = await getContractInstance();
  
//     // Listen for VoteCast events
//     contract.on("VoteCast", (candidateAddress, voteCount, candidatesArray) => {
//       onVoteCast(candidateAddress, voteCount, candidatesArray);
//     });
  
//     // Listen for ElectionStarted events
//     contract.on("ElectionStarted", (startTime, endTime) => {
//       onElectionStart(startTime, endTime);
//     });
//   };

const switchToSepolia = async () => {
	try {
	  await window.ethereum.request({
		method: "wallet_switchEthereumChain",
		params: [{ chainId: SEPOLIA_CHAIN_ID_HEX }],
	  });
	} catch (error) {
	  // If the network is not added to MetaMask, add it
	  if (error.code === 4902) {
		await window.ethereum.request({
		  method: "wallet_addEthereumChain",
		  params: [
			{
			  chainId: SEPOLIA_CHAIN_ID_HEX,
			  chainName: "Sepolia Test Network",
			  nativeCurrency: {
				name: "SepoliaETH",
				symbol: "ETH",
				decimals: 18,
			  },
			  rpcUrls: ["https://sepolia.infura.io/v3/YOUR_INFURA_KEY"],
			  blockExplorerUrls: ["https://sepolia.etherscan.io"],
			},
		  ],
		});
	  } else {
		throw error;
	  }
	}
  };
  
  export const getContractInstance = async () => {
	if (!window.ethereum) {
	  alert("MetaMask is not installed");
	  return;
	}
  
	const provider = new ethers.providers.Web3Provider(window.ethereum);
  
	// Request accounts if not connected
	await provider.send("eth_requestAccounts", []);
  
	// Check network
	const network = await provider.getNetwork();
	if (network.chainId !== 11155111) {
	  await switchToSepolia();
	}
  
	const signer = provider.getSigner();
	return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
  };
  
  export const listenForElectionEvents = async (onVoteCast, onElectionStart) => {
	const contract = await getContractInstance();
	
	contract.on("VoteCast", (candidateAddress, voteCount, candidatesArray) => {
	  onVoteCast(candidateAddress, voteCount, candidatesArray);
	});
  
	contract.on("ElectionStarted", (startTime, endTime) => {
	  onElectionStart(startTime, endTime);
	});
  };

export default {
    listenForElectionEvents,
    getContractInstance,
};
