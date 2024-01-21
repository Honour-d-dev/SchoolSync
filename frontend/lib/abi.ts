export const institutionV2Abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_adminAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "department",
        type: "string",
      },
    ],
    name: "newAdminCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_studentAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "id",
        type: "string",
      },
    ],
    name: "newStudentRegistration",
    type: "event",
  },
  {
    inputs: [],
    name: "getStudentData",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "studentId",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "studentInfo",
            type: "string",
          },
        ],
        internalType: "struct StudentManager.Student",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        internalType: "struct StudentManager.Document[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "string",
                name: "courseCode",
                type: "string",
              },
              {
                internalType: "string",
                name: "courseTitle",
                type: "string",
              },
              {
                internalType: "uint8",
                name: "unit",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "score",
                type: "uint8",
              },
            ],
            internalType: "struct StudentManager.Course[]",
            name: "firstSemester",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "courseCode",
                type: "string",
              },
              {
                internalType: "string",
                name: "courseTitle",
                type: "string",
              },
              {
                internalType: "uint8",
                name: "unit",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "score",
                type: "uint8",
              },
            ],
            internalType: "struct StudentManager.Course[]",
            name: "secondSemester",
            type: "tuple[]",
          },
        ],
        internalType: "struct StudentManager.Session[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "studentId",
        type: "string",
      },
    ],
    name: "getStudentDataFor",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "studentId",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "studentInfo",
            type: "string",
          },
        ],
        internalType: "struct StudentManager.Student",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        internalType: "struct StudentManager.Document[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "string",
                name: "courseCode",
                type: "string",
              },
              {
                internalType: "string",
                name: "courseTitle",
                type: "string",
              },
              {
                internalType: "uint8",
                name: "unit",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "score",
                type: "uint8",
              },
            ],
            internalType: "struct StudentManager.Course[]",
            name: "firstSemester",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "courseCode",
                type: "string",
              },
              {
                internalType: "string",
                name: "courseTitle",
                type: "string",
              },
              {
                internalType: "uint8",
                name: "unit",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "score",
                type: "uint8",
              },
            ],
            internalType: "struct StudentManager.Course[]",
            name: "secondSemester",
            type: "tuple[]",
          },
        ],
        internalType: "struct StudentManager.Session[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "instiutionName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
    ],
    name: "isIdRegistered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isRegistered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "faculty",
        type: "string",
      },
      {
        internalType: "string",
        name: "department",
        type: "string",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "registerAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "faculty",
        type: "string",
      },
      {
        internalType: "string",
        name: "department",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "registerAdmins",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "s_adminProfile",
    outputs: [
      {
        internalType: "address",
        name: "adminAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "faculty",
        type: "string",
      },
      {
        internalType: "string",
        name: "department",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_registrationFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "studentId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "s_studentDocument",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "studentInfo",
        type: "string",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        internalType: "struct StudentManager.Document",
        name: "studentIdCard",
        type: "tuple",
      },
    ],
    name: "studentRegistration",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "level",
        type: "uint8",
      },
      {
        internalType: "enum StudentManager.Semester",
        name: "semester",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "string",
            name: "id",
            type: "string",
          },
          {
            components: [
              {
                internalType: "string",
                name: "courseCode",
                type: "string",
              },
              {
                internalType: "string",
                name: "courseTitle",
                type: "string",
              },
              {
                internalType: "uint8",
                name: "unit",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "score",
                type: "uint8",
              },
            ],
            internalType: "struct StudentManager.Course",
            name: "course",
            type: "tuple",
          },
        ],
        internalType: "struct InstitutionV2.CourseWithId[]",
        name: "courses",
        type: "tuple[]",
      },
    ],
    name: "uploadAcademicData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "ids",
        type: "string[]",
      },
    ],
    name: "uploadStudentIds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "studentId",
            type: "string",
          },
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "uri",
                type: "string",
              },
            ],
            internalType: "struct StudentManager.Document",
            name: "document",
            type: "tuple",
          },
        ],
        internalType: "struct InstitutionV2.DocumentWithId[]",
        name: "documents",
        type: "tuple[]",
      },
    ],
    name: "uploadStudentsDocument",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "ids",
        type: "string[]",
      },
      {
        components: [
          {
            internalType: "string",
            name: "studentId",
            type: "string",
          },
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "uri",
                type: "string",
              },
            ],
            internalType: "struct StudentManager.Document",
            name: "document",
            type: "tuple",
          },
        ],
        internalType: "struct InstitutionV2.DocumentWithId[]",
        name: "documents",
        type: "tuple[]",
      },
    ],
    name: "uploadStudentsIdsAndDocuments",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
