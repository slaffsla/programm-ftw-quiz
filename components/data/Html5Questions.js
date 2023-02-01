const Html5Questions = [

  {
    "id": 1,
    "question": "What symbol is used for equality in JavaScript?",
    "answers": [
    "==",
    "===",
    "=",
    "!="
    ],
    "correctIndex": 1
    },
    
    {
    "id": 2,
    "question": "What is the syntax for creating an object in JavaScript?",
    "answers": [
    "let obj = []",
    "let obj = {}",
    "obj = []",
    "obj = {}"
    ],
    "correctIndex": 1
    },
    
    {
    "id": 3,
    "question": "Which of these is not a way to create a variable in JavaScript?",
    "answers": [
    "var",
    "const",
    "let",
    "define"
    ],
    "correctIndex": 3
    },
    
    {
    "id": 4,
    "question": "What type of loop is best suited to iterating over an array in JavaScript?",
    "answers": [
    "for loop",
    "while loop",
    "do-while loop",
    "forEach loop"
    ],
    "correctIndex": 3
    },

    {
    "id": 5,
    "question": "What is the correct syntax for creating a function in JavaScript?",
    "answers": [
    "function = myFunction()",
    "let myFunction = function()",
    "function myFunction()",
    "let = function myFunction()"
    ],
    "correctIndex": 2
    },
    
    {
    "id": 6,
    "question": "What is the keyword used to issue an error in JavaScript?",
    "answers": [
    "error",
    "throw",
    "fail",
    "exception"
    ],
    "correctIndex": 1
    },

    {
      "id": 7,
      "question": "What's the difference between let and var in ES6?",
      "answers": [
      "let is block-scoped, var is function-scoped",
      "var is block-scoped, let is function-scoped",
      "let and var are both function-scoped",
      "let and var are both block-scoped"
      ],
      "correctIndex": 0
    },

    //Del
    {
      "id": 7,
      "question": "What is let keyword used for?",
      "answers": [
      "Define constant variables",
      "Define block-scoped variables",
      "Define global variables",
      "Define function-scoped variables"
      ],
      "correctIndex": 1
      },

      {
      "id": 8,
      "question": "What is const keyword used for?",
      "answers": [
      "Define block-scoped variables",
      "Define global variables",
      "Define constant variables",
      "Define function-scoped variables"
      ],
      "correctIndex": 2
      },

      {
        "id": 9,
        "question": "How can you destructure an object in JavaScript?",
        "answers": [
        "Using square brackets",
        "Using curly braces",
        "Using both square and curly braces",
        "Destructuring is not possible for objects"
        ],
        "correctIndex": 1
      },

      {
      "id": 10,
      "question": "How to destructure an array?",
      "answers": [
      "Using destructuring assignment",
      "Using spread operator",
      "Using rest operator",
      "None of the above"
      ],
      "correctIndex": 0
      },

      {
      "id": 11,
      "question": "How to declare a class in ES6?",
      "answers": [
      "Using class keyword",
      "Using function constructor",
      "Using object literal notation",
      "None of the above"
      ],
      "correctIndex": 0
      },
      
      {
        "id": 19,
        "question": "What is the purpose of the let keyword in JavaScript?",
        "answers": [
        "To declare a variable with global scope",
        "To declare a variable with block-level scope",
        "To declare a variable that can only be reassigned",
        "To declare a constant variable"
        ],
        "correctIndex": 1
      },

      {
      "id": 20,
      "question": "What is the purpose of the const keyword in JavaScript?",
      "answers": [
      "To declare a variable with block-level scope",
      "To declare a variable with global scope",
      "To declare a variable that can be reassigned",
      "To declare a constant variable"
      ],
      "correctIndex": 3
      },

      {
      "id": 21,
      "question": "Which of the following is not a feature introduced in ES6?",
      "answers": [
      "Template literals",
      "Rest parameters",
      "Spread operator",
      "TypeScript"
      ],
      "correctIndex": 3
      },

      {
      "id": 22,
      "question": "Which of the following is not a feature of arrow functions?",
      "answers": [
      "Lexical this",
      "Shorter syntax",
      "Dynamic this",
      "Can’t be used as constructors"
      ],
      "correctIndex": 2
      },

      {
      "id": 23,
      "question": "What is the purpose of the ... operator in JavaScript?",
      "answers": [
      "To destructure arrays",
      "To merge arrays",
      "To spread arrays",
      "To concatenate arrays"
      ],
      "correctIndex": 2
      },

      {
        "id": 24,
        "question": "What is the output of this code: let x = [1,2,3]; console.log(...x);",
        "answers": [
        "undefined",
        "Error",
        "1,2,3",
        "[1,2,3]"
        ],
        "correctIndex": 2
      },

      {
      "id": 25,
      "question": "What is the output of this code: let obj = { name: 'John', age: 30 }; let { name, age} = obj; console.log(name, age);",
      "answers": [
      "undefined, undefined",
      "Error",
      "John, 30",
      "name, age"
      ],
      "correctIndex": 2
      },

      {
        "id": 26,
        "question": "How to check if an object has a specific property in JavaScript?",
        "answers": [
        "object.hasOwnProperty()",
        "object.propertyIsEnumerable()",
        "Object.keys()",
        "property in object"
        ],
        "correctIndex": 0
      },
      {
        "id": 27,
        "question": "How to make a deep copy of an object in JavaScript?",
        "answers": [
        "JSON.parse(JSON.stringify())",
        "Object.assign({}, object)",
        "Object.create(object)",
        "Spread operator"
        ],
        "correctIndex": 0
      },
      {
        "id": 28,
        "question": "What is hoisting in JavaScript?",
        "answers": [
        "Moving variable and function declarations to the top of their scope",
        "Executing functions in order they are declared",
        "Declaring functions and variables only after they are used",
        "Caching variable and function declarations for better performance"
        ],
        "correctIndex": 0
      },
        
      {
        "id": 29,
        "question": "Which of the following is not a valid way to declare a variable in JavaScript?",
        "answers": [
        "var",
        "let",
        "const",
        "define"
        ],
        "correctIndex": 3
      },
      {
        "id": 30,
        "question": "What does the spread operator do in JavaScript?",
        "answers": [
        "It creates a new array by spreading all elements of an existing array into a new array",
        "It concatenates two arrays into a single array",
        "It spreads the properties of an object into a new object",
        "It creates a shallow copy of an array or an object"
        ],
        "correctIndex": 0
        },
        {
        "id": 31,
        "question": "What is the output of the following code? console.log(typeof(null))",
        "answers": [
        "null",
        "object",
        "undefined",
        "string"
        ],
        "correctIndex": 1
        },


      {
      "id": 30,
      "question": "What is the difference between null and undefined in JavaScript?",
      "answers": [
      "null is a value that represents no value, while undefined means a variable has been declared but has not been assigned a value",
      "undefined is a value that represents no value, while null means a variable has been declared but has not been assigned a value",
      "null and undefined are the same thing",
      "null is an object, while undefined is a primitive value"
      ],
      "correctIndex": 0
      },
      
      //some to check

    {
    "id": 27,
    "question": "What is the output of this code: function* generator() { yield 1; yield 2; yield 3; } let gen = generator(); console.log(gen.next().value);",
    "answers": [
    "1",
    "2",
    "3",
    "undefined"
    ],
    "correctIndex": 0
    },

    {
    "id": 22,
    "question": "What is the output of this code: class Test { constructor() { this.a = 1; } print() { console.log(this.a); } } let test = new Test(); let { print } = test; print();",
    "answers": [
    "1",
    "undefined",
    "Error",
    "this is not defined"
    ],
    "correctIndex": 3
    },
    {
    "id": 23,
    "question": "What is the output of this code: let x = 0.1 + 0.2; console.log(x === 0.3);",
    "answers": [
    "true",
    "false",
    "0.3",
    "undefined"
    ],
    "correctIndex": 1
    },
    
      {
      "id": 25,
      "question": "How to declare private properties in JavaScript class?",
      "answers": [
      "_property",
      "private property",
      "property with Symbol",
      "property with WeakMap"
      ],
      "correctIndex": 2
      },
      



      {
      "id": 27,
      "question": "What is the output of this code? (() => { let x = 5; return (() => x)(); })();",
      "answers": [
      "5",
      "undefined",
      "error",
      "null"
      ],
      "correctIndex": 0
      },
     
        {
        "id": 6,
        "question": "Which of the following is not a primitive data type in JavaScript?",
        "answers": [
        "Number",
        "String",
        "Boolean",
        "Object"
        ],
        "correctIndex": 3
        },
        {
        "id": 7,
        "question": "What is the output of the following code? console.log(0.1 + 0.2 === 0.3)",
        "answers": [
        "true",
        "false"
        ],
        "correctIndex": 1
        },
        {
        "id": 8,
        "question": "What is closure in JavaScript?",
        "answers": [
        "A closure is a function that has access to variables in its outer scope, even after the outer function has returned",
        "A closure is an inner function that has access to the outer function's variables",
        "A closure is a function that returns another function",
        "A closure is an object that combines a function and

        {
          "id": 67,
          "question": "What is the difference between == and === in JavaScript?",
          "answers": [
          "== compares values and type coercion, === compares values without type coercion",
          "== compares values without type coercion, === compares values and type coercion",
          "Both == and === perform type coercion",
          "Both == and === do not perform type coercion"
          ],
          "correctIndex": 0
          },
          
          {
          "id": 68,
          "question": "What is the output of the following code: console.log(typeof undefined == typeof null)",
          "answers": [
          "true",
          "false",
          "undefined",
          "null"
          ],
          "correctIndex": 0
          },
          
          {
          "id": 69,
          "question": "What is the difference between null and undefined in JavaScript?",
          "answers": [
          "null is explicitly set to a non-value, undefined means a value has not been assigned",
          "undefined is explicitly set to a non-value, null means a value has not been assigned",
          "They are the same, both represent non-values",
          "They are different, one represents an error and one represents a non-value"
          ],
          "correctIndex": 0
          },
          
          {
          "id": 70,
          "question": "What is closure in JavaScript?",
          "answers": [
          "A closure is a function that has access to variables in its outer scope, even after the outer function has returned",
          "A closure is a function that has access to global variables, even after the outer function has returned",
          "A closure is an object that holds a reference to a function and its associated variables",
          "A closure is a function that can only be called once"
          ],
          "correctIndex": 0
          },
          
          {
          "id": 71,
          "question": "What is the purpose of the 'new' operator in JavaScript?",
          "answers": [
          "The 'new' operator creates a new instance of an object, using a constructor function",
          "The 'new' operator creates a new instance of a primitive type",
          "The 'new' operator creates a new function",
          "The 'new' operator creates a new array"
          ],
          "correctIndex": 0
          },
          {
            "id": 119,
            "question": "What is the difference between the let and const keywords in JavaScript?",
            "answers": [
            "let is block-scoped and const is function-scoped",
            "const is block-scoped and let is function-scoped",
            "Both let and const are block-scoped",
            "Both let and const are function-scoped"
            ],
            "correctIndex": 2
            },
            
            {
            "id": 120,
            "question": "Which of the following is not a feature of ECMAScript 6 (ES6)?",
            "answers": [
            "Destructuring assignment",
            "Map and Set data structures",
            "Block-scoped variables with let and const",
            "Private properties in classes"
            ],
            "correctIndex": 3
            },
            
            {
            "id": 121,
            "question": "What is the purpose of the for...of loop in JavaScript?",
            "answers": [
            "To iterate over the values in an array",
            "To iterate over the properties in an object",
            "To execute a block of code for a specific number of times",
            "To execute a block of code until a specified condition is met"
            ],
            "correctIndex": 0
            },
            
            {
            "id": 122,
            "question": "What is the difference between the spread operator (...) and the rest operator (...) in JavaScript?",
            "answers": [
            "The spread operator expands an array, while the rest operator collects multiple values into an array",
            "The rest operator expands an array, while the spread operator collects multiple values into an array",
            "Both operators do the same thing",
            "They are completely different and have no relationship"
            ],
            "correctIndex": 0
            },
            
            {
            "id": 123,
            "question": "Which of the following is not a way to create a new object in JavaScript?",
            "answers": [
            "Object literal",
            "Object constructor",
            "Class constructor",
            "Object.create() method"
            ],
            "correctIndex": 2
          },

          {
            "id": 79,
            "question": "What is the result of executing this code? console.log(typeof typeof 1);",
            "answers": [
            "number",
            "string",
            "undefined",
            "null"
            ],
            "correctIndex": 1
            },
            {
            "id": 80,
            "question": "Which of the following is not a valid way to declare a variable in JavaScript?",
            "answers": [
            "var",
            "let",
            "const",
            "define"
            ],
            "correctIndex": 3
            },
            {
            "id": 81,
            "question": "What is the output of this code? console.log(0.1 + 0.2 == 0.3);",
            "answers": [
            "true",
            "false",
            "undefined",
            "null"
            ],
            "correctIndex": 1
            },
            {
            "id": 82,
            "question": "What is the difference between == and === in JavaScript?",
            "answers": [
            "== performs type coercion while === does not",
            "=== performs type coercion while == does not",
            "Both == and === perform type coercion",
            "Neither == nor === perform type coercion"
            ],
            "correctIndex": 0
            }

            {
              "id": 181,
              "question": "What is the purpose of the Array.prototype.reduce() method in JavaScript?",
              "answers": [
              "To remove elements from an array",
              "To iterate over an array and produce a single value as output",
              "To sort an array in ascending or descending order",
              "To insert elements into an array"
              ],
              "correctIndex": 1
              },
              {
              "id": 182,
              "question": "What is the difference between null and undefined in JavaScript?",
              "answers": [
              "null is explicitly set by a programmer, undefined means a variable has been declared but has not yet been assigned a value",
              "null and undefined are the same value",
              "null is an object, undefined is a primitive value",
              "undefined is explicitly set by a programmer, null means a variable has been declared but has not yet been assigned a value"
              ],
              "correctIndex": 0
              },
              {
              "id": 183,
              "question": "How do you declare a constant in JavaScript?",
              "answers": [
              "var constant = value",
              "let constant = value",
              "const constant = value",
              "final constant = value"
              ],
              "correctIndex": 2
              },
              {
              "id": 184,
              "question": "What is the difference between let and var in JavaScript?",
              "answers": [
              "let is block-scoped, var is function-scoped",
              "var is block-scoped, let is function-scoped",
              "let and var are both function-scoped",
              "let and var are both block-scoped"
              ],
              "correctIndex": 0
              },
              {
              "id": 185,
              "question": "How do you declare a JavaScript arrow function?",
              "answers": [
              "function (params) => { code }",
              "function params => { code }",
              "(params) => { code }",
              "(params) { code }"
              ],
              "correctIndex": 2
              },

              {
                "id": 84,
                "question": "What is the result of the following expression: Boolean(NaN)?",
                "answers": [
                "true",
                "false",
                "NaN",
                "undefined"
                ],
                "correctIndex": 1
                },
                {
                "id": 85,
                "question": "What will be the output of the following code?\n\n\nlet num = 0.1 + 0.2;\nconsole.log(num);\n",
                "answers": [
                "0.3",
                "0.30000000000000004",
                "0.5",
                "1"
                ],
                "correctIndex": 1
                },
                {
                "id": 86,
                "question": "What will be the output of the following code?\n\n\nconsole.log(0.1 + 0.2 === 0.3);\n",
                "answers": [
                "true",
                "false",
                "0.3",
                "undefined"
                ],
                "correctIndex": 1
                },
                {
                "id": 87,
                "question": "What is the correct way to check if a variable x is an array in JavaScript?",
                "answers": [
                "Array.isArray(x)",
                "x instanceof Array",
                "typeof x === 'array'",
                "x.constructor === Array"
                ],
                "correctIndex": 0
                },
                {
                "id": 88,
                "question": "What is the output of the following code?\n\n\nconsole.log(typeof typeof 1);\n",
                "answers": [
                "number",
                "string",
                "undefined",
                "object"
                ],
                "correctIndex": 1
                },
                {
                "id": 89,
                "question": "What is the value of a after the following code runs?\n\n\nlet a = (1, 2, 3);\n",
                "answers": [
                "1",
                "2",
                "3",
                "undefined"
                ],
                "correctIndex": 2
                },

                {
                  "id": 97,
                  "question": "What is the use of the 'this' keyword in JavaScript?",
                  "answers": [
                  "To refer to a function's arguments object",
                  "To refer to the object that a function is a property of",
                  "To refer to the global object",
                  "To refer to a newly created object"
                  ],
                  "correctIndex": 1
                }
                  
                  And another one:
                  
                  {
                  "id": 98,
                  "question": "What is closure in JavaScript?",
                  "answers": [
                  "A way to protect the privacy of an object's properties",
                  "A function that returns another function",
                  "An immediately-invoked function expression (IIFE)",
                  "A special value that can be returned from a function"
                  ],
                  "correctIndex": 1
                  }
          




{
id: '1',
question: 'What is the correct way to convert a string to a number in JavaScript?',
answers: [
'Number(string)',
'string.toNumber()',
'parseInt(string)',
'parseFloat(string)'
],
correctIndex: 2
},
{
id: '2',
question: 'What method can you use to add an element to the end of an array in JavaScript?',
answers: [
'push()',
'pop()',
'unshift()',
'shift()'
],
correctIndex: 0
},
{
id: '3',
question: 'What is the syntax for a ternary operator in JavaScript?',
answers: [
'if (condition) { statement1 } else { statement2 }',
'condition ? statement1 : statement2',
'switch (condition) { case statement1 : break; case statement2 : break; }',
'while (condition) { statement1; statement2; }'
],
correctIndex: 1
},
{
id: '4',
question: 'Which of these is not a falsy value in JavaScript?',
answers: [
'undefined',
'null',
'NaN',
'false'
],
correctIndex: 3
},
{
id: '5',
question: 'Which of these is a correct way to declare a variable in JavaScript?',
answers: [
'var variableName;',
'let variableName;',
'const variableName;',
'VariableName;'
],
correctIndex: 0
},
{
id: '6',
question: 'What is the correct syntax to use a while loop in JavaScript?',
answers: [
'while (condition) { statements; }',
'do { statements; } while (condition);',
'for (;;) { statements; }',
'if (condition) { statements; }'
],
correctIndex: 0
},
{
id: '7',
question: 'How can you check if a variable is an object in JavaScript?',
answers: [
'typeof variable === "object"',
'variable instanceof Object',
'Array.isArray(variable)',
'Object.prototype.toString.call(variable) === "[object Object]"'
],
correctIndex: 1
},
{
id: '8',
question: 'What is the correct way to check if an array is empty in JavaScript?',
answers: [
'array.length === 0',
'array === []',
'array.size === 0',
'array.empty()'
],
correctIndex: 0
},


//TODO:
{
id: '9',
question: 'How can you check if a variable is a string in JavaScript?',
answers: [
'typeof variable === "string"',
'variable instanceof String',
'Array.isArray(variable)',
'Object.prototype.to

{
  id: '9',
  question: 'What is the difference between let and var in JavaScript?',
  answers: [
  'let is block-scoped, var is function-scoped',
  'var is block-scoped, let is function-scoped',
  'let is not hoisted, var is hoisted',
  'var is not hoisted, let is hoisted'
  ],
  correctIndex: 0
  },


{
  id: '10',
  question: 'In JavaScript, which of the following is a way to convert a string to an integer?',
  answers: [
  'parseInt()',
  'toInt()',
  'stringToInt()',
  'Number()'
  ],
  correctIndex: 0
  },
  
  {
  id: '11',
  question: 'Which of the following is a way to declare a variable in JavaScript?',
  answers: [
  'var',
  'let',
  'const',
  'define'
  ],
  correctIndex: 1
  },
  
  {
  id: '12',
  question: 'How can you check if an object is an Array in JavaScript?',
  answers: [
  'You can use the Array.isArray() method',
  'You can use the instanceof operator',
  'You can use the typeof operator',
  'None of the above'
  ],
  correctIndex: 0
  },
  
  {
  id: '13',
  question: 'What is the correct way to round a number to two decimal places in JavaScript?',
  answers: [
  'round(number, 2)',
  'number.round(2)',
  'number.toFixed(2)',
  'toFixed(number, 2)'
  ],
  correctIndex: 2
  },
  
  {
  id: '14',
  question: 'What is the difference between the ' + 'null' + ' and ' + 'undefined' + ' values in JavaScript?',
  answers: [
  'null is explicitly set, undefined means a value has not been set',
  'undefined is explicitly set, null means a value has not been set',
  'null and undefined are the same',
  'null is used for objects, undefined is used for variables'
  ],
  correctIndex: 0
  },
  {
    id: '15',
    question: 'What is closure in JavaScript?',
    answers: [
    'A closure is a function object that has access to variables in its outer scope, even after the outer function has returned',
    'A closure is an object that provides access to an inner function',
    'A closure is a combination of a function and the lexical environment within which that function was declared',
    'A closure is a way to protect the privacy of an object's properties and methods'
    ],
    correctIndex: 2
    },
    
    {
    id: '16',
    question: 'Which of the following is not a way to create an object in JavaScript?',
    answers: [
    'By using object literal notation',
    'By using the new keyword and an object constructor',
    'By using the create method',
    'By using the object.assign() method'
    ],
    correctIndex: 2
    },
    
    {
    id: '17',
    question: 'Which of the following is a falsy value in JavaScript?',
    answers: [
    'null',
    'undefined',
    'NaN',
    '0'
    ],
    correctIndex: 3
    },
    
    {
    id: '18',
    question: 'Which of the following is not a comparison operator in JavaScript?',
    answers: [
    '==',
    '===',
    '!=',
    '!=='
    ],
    correctIndex: 3
    },
    
    {
    id: '19',
    question: 'What is the purpose of "use strict" in JavaScript?',
    answers: [
    'To enforce strict typing in JavaScript',
    'To make JavaScript code run faster',
    'To enforce more strict coding rules and throw errors for common mistakes',
    'To make JavaScript code more compatible with other programming languages'
    ],
    correctIndex: 2
    },
    
    {
    id: '20',
    question: 'Which of the following is not a JavaScript data type?',
    answers: [
    'Number',
    'String',
    'Object',
    'Boolean'
    ],
    correctIndex: 3
    },
    [  {    "id": 21,    "question": "What is the result of the following code in JavaScript: var a = 1; (function() { var a = 2; console.log(a); })(); console.log(a);",    "options": [      "2 1",      "1 2",      "2 undefined",      "1 undefined"    ],
    "correctIndex": 0
  },
  {
    "id": 22,
    "question": "What would be the value of `num` after the following code in JavaScript is executed? var num = 0; for (var i = 1; i < 5; i++) { num += i; }",
    "options": [
      "0",
      "10",
      "20",
      "15"
    ],
    "correctIndex": 3
  },
  {
    "id": 23,
    "question": "What would be the output of the following code in JavaScript? console.log(0.1 + 0.2 === 0.3);",
    "options": [
      "true",
      "false",
      "undefined",
      "null"
    ],
    "correctIndex": 1
  },
  {
    "id": 24,
    "question": "What would be the value of `x` after the following code in JavaScript is executed? var x = 0; for (var i = 0; i < 10; i++) { x = x + i; }",
    "options": [
      "45",
      "90",
      "55",
      "0"
    ],
    "correctIndex": 2
  },
  {
    "id": 25,
    "question": "What is the value of `x` after the following code in JavaScript is executed? var x = '5'; var y = +x;",
    "options": [
      "5",
      "NaN",
      "undefined",
      "null"
    ],
    "correctIndex": 0
  },



  {
    "id": 25,
    "question": "What's the difference between let and var in JavaScript?",
    "answers": [
      "let has block scope while var has function scope",
      "let is hoisted while var is not",
      "var is implicitly declared while let is not",
      "let can be updated while var cannot"
    ],
    "correctIndex": 2,
    "briefAnswers": [
      "let block, var func scope",
      "let hoisted, var not",
      "var implicit, let not",
      "let updatable, var not"
    ]
  },
  {
    "id": 26,
    "question": "What's the result of (1,5,2) in JavaScript?",
    "answers": [
      "An array",
      "2",
      "A SyntaxError",
      "undefined"
    ],
    "correctIndex": 1,
    "briefAnswers": [
      "Array",
      "2",
      "SyntaxError",
      "undefined"
    ]
  },


  {
    "questions": [
      {
        "id": 25,
        "question": "In JavaScript, what's the difference between `null` and `undefined`?",
        "answers": [
          "`null` is explicitly set, `undefined` means a var is declared but not assigned",
          "`null` means absence of a value, `undefined` is an undefined value",
          "`null` is an object, `undefined` is a primitive value",
          "`null` and `undefined` are completely interchangeable"
        ],
        "correctIndex": 0
      },
      {
        "id": 26,
        "question": "How can you add an element to the end of an array in JavaScript?",
        "answers": [
          "`arr.push(element)`",
          "`arr[arr.length] = element`",
          "`arr.append(element)`",
          "`arr[-1] = element`"
        ],
        "correctIndex": 0
      },
      {
        "id": 27,
        "question": "How can you convert a string to an integer in JavaScript?",
        "answers": [
          "`parseInt(string)`",
          "`string.toInt()`",
          "`Number(string)`",
          "`int(string)`"
        ],
        "correctIndex": 0
      },
      {
        "id": 28,
        "question": "In JavaScript, what is closure?",
        "answers": [
          "A closure is a fn returned inside another fn, retaining access to parent's vars",
          "A closure is an object that maintains state between function calls",
          "A closure is a function that executes when its parent function returns",
          "A closure is a special type of class in JavaScript"
        ],
        "correctIndex": 0
      },
      {
        "id": 29,
        "question": "What is the difference between `var` and `let` in JavaScript?",
        "answers": [
          "`var` is function scoped, `let` is block scoped",
          "`var` is global scoped, `let` is local scoped",
          "`var` is only for numbers, `let` for strings",
          "`var` is only for arrays, `let` for objects"
        ],
        "correctIndex": 0
      }
    ]
  }

  {
    "id": 46,
    "question": "What is the difference between call() and apply() methods in JavaScript?",
    "options": [
      "Call and apply are the same thing",
      "Call method passes arguments separately, apply takes an array",
      "Apply can only be used with objects, call can be used with primitives",
      "Apply can only be used with functions, call can be used with objects"
    ],
    "correctIndex": 1
  },
  {
    "id": 47,
    "question": "What is Closure in JavaScript?",
    "options": [
      "Closures are functions that return other functions",
      "Closures are private variables within an object",
      "Closures are variables accessible only inside the object",
      "Closures are variables accessible only outside the object"
    ],
    "correctIndex": 0
  },
  {
    "id": 48,
    "question": "What is the use of bind() method in JavaScript?",
    "options": [
      "Bind is used to link two functions together",
      "Bind is used to set the value of 'this' permanently",
      "Bind is used to define prototype properties",
      "Bind is used to assign new values to function arguments"
    ],
    "correctIndex": 1
  },
  {
    "id": 49,
    "question": "What is hoisting in JavaScript?",
    "options": [
      "Hoisting is the process of moving function declarations to the top of the code",
      "Hoisting is the process of moving variable declarations to the bottom of the code",
      "Hoisting is the process of moving variable and function declarations to the top of the code",
      "Hoisting is the process of moving variable and function declarations to the bottom of the code"
    ],
    "correctIndex": 2
  },
  {
    "id": 50,
    "question": "What is the difference between == and === in JavaScript?",
    "options": [
      "== performs type coercion, === doesn't",
      "=== performs type coercion, == doesn't",
      "== and === are the same thing",
      "None of the above"
    ],
    "correctIndex": 0
  }
  {
    "questions": [
      {
        "id": 101,
        "question": "What's the result of `!NaN`?",
        "answers": [
          "True",
          "False",
          "undefined",
          "NaN"
        ],
        "correctIndex": 1
      },
      {
        "id": 102,
        "question": "What's the result of `typeof null`?",
        "answers": [
          "Object",
          "null",
          "Undefined",
          "String"
        ],
        "correctIndex": 0
      },
      {
        "id": 103,
        "question": "What's the result of `Boolean(0)`?",
        "answers": [
          "False",
          "True",
          "0",
          "null"
        ],
        "correctIndex": 0
      },
      {
        "id": 104,
        "question": "What's the result of `[] == false`?",
        "answers": [
          "True",
          "False",
          "undefined",
          "NaN"
        ],
        "correctIndex": 1
      },
      {
        "id": 105,
        "question": "What's the result of `{} + []`?",
        "answers": [
          "0",
          "[object Object]",
          "{}",
          "[]"
        ],
        "correctIndex": 1
      }
    ]
  },
  /// some ans not right
  {
    "id": 50,
    "question": "What is the output of the following code snippet? let x = 5; console.log(typeof x++);",
    "answers": [
      "string",
      "number",
      "undefined",
      "syntax error"
    ],
    "correctIndex": 1
  }
  
  {
    "id": 51,
    "question": "What is the output of this code? console.log(typeof typeof 1);",
    "answers": [
      "number",
      "string",
      "undefined",
      "TypeError"
    ],
    "correctIndex": 1
  }
  
  {
    "id": 52,
    "question": "What will be the output of the code? let x = true; let y = false; console.log(x + '' + y + x);",
    "answers": [
      "truefalsetrue",
      "truetruefalse",
      "falsetruefalse",
      "falsetruetrue"
    ],
    "correctIndex": 0
  }
  
  {
    "id": 53,
    "question": "What is the output of the code? console.log(0.1 + 0.2 === 0.3);",
    "answers": [
      "true",
      "false",
      "0.3",
      "TypeError"
    ],
    "correctIndex": 1
  },


////                  

//same here?:    
{
"id": 50,
"question": "What is the value of x after this code runs? let x = '5'; x = +x;",
"answers": [
  "5",
  "\"5\"",
  "NaN",
  "0"
],
"correctIndex": 0
}
{
"id": 51,
"question": "What is closure in JavaScript?",
"answers": [
  "A function returning a function",
  "An inner function accessing outer function variables",
  "An anonymous function",
  "None of the above"
],
"correctIndex": 1
},
{
"id": 52,
"question": "What is hoisting in JavaScript?",
"answers": [
  "Variable and function declarations moved to top",
  "Variable and function declarations moved to bottom",
  "Variable declarations moved to top, function declarations remain in place",
  "None of the above"
],
"correctIndex": 0
}
{
"id": 53,
"question": "What is the difference between == and ===?",
"answers": [
  "== compares values, === compares type and value",
  "== compares type and value, === compares values",
  "Both compare values",
  "Both compare type and value"
],
"correctIndex": 0
},
{
"id": 54,
"question": "What is the output of the code below? console.log(typeof typeof 1);",
"answers": [
  "number",
  "string",
  "undefined",
  "null"
],
"correctIndex": 1
}


      id: 22
      question: What is the result of typeof NaN in JavaScript?
      answer1: "number"
      answer2: "NaN"
      answer3: "string"
      answer4: "undefined"
      correctIndex: 1
      
      id: 23
      question: What is the result of the following expression: (true + false) > 2 + true in JavaScript?
      answer1: true
      answer2: false
      answer3: "error"
      answer4: 0
      correctIndex: 2
      
      id: 24
      question: What is the result of the following expression: "5" - 2 in JavaScript?
      answer1: 3
      answer2: "3"
      answer3: "error"
      answer4: NaN
      correctIndex: 1
      
      id: 25
      question: What is the result of the following expression: "5" + 2 in JavaScript?
      answer1: 7
      answer2: "52"
      answer3: "error"
      answer4: NaN
      correctIndex: 2
      
      id
      
      
      






{
  id: '3',
  question: 'What is the difference between let and var?',
  answers: [
  'let is block-scoped, var is function-scoped',
  'var is block-scoped, let is function-scoped',
  'let is hoisted, var is not',
  'var is hoisted, let is not'
  ],
  correctIndex: 0
  },
{
  id: '1',
  question: 'What is the difference between var, let, and const?',
  answers: [
  'let and const are hoisted, var is not',
  'var can be reassigned, let and const cannot',
  'var is function scoped, let and const are block scoped',
  'All of the above'
  ],
  correctIndex: 2
  },

//TODO:
{
    id: '2',
    question: 'What is hoisting?',
    answers: [
      'A mechanism in JavaScript where variable and function declarations are moved to the top of their scope',
      'A way to move elements in the DOM',
      'A method for handling errors',
      'None of the above'
    ],
    correctIndex: 0
},
{
    id: '3',
    question: 'What is a closure?',
    answers: [
      'A function that has access to variables in its parent scope',
      'A function that can only be invoked once',
    'A function that can only be invoked by its parent function',
    'None of the above'
    ],
    correctIndex: 0
},
{
  id: '4',
  question: 'What is the difference between == and === in JavaScript?',
  answers: [
    '== compares only value, === compares value and type',
    '== only compares values, === only compares data types',
  '== and === are the same thing',
  'None of the above'
  ],
  correctIndex: 0
  },
{
    id: '5',
    question: 'What is the purpose of the "this" keyword?',
      answers: [
        'To reference the current object',
        'To reference the parent object',
        'To reference the global object',
        'To reference the constructor function'
      ],
      correctIndex: 0
  },
  {
      id: '6',
      question: 'What is the difference between .map() and .forEach()?',
      answers: [
        '.map() returns a new array and .forEach() does not',
        '.map() modifies the original array and .forEach() does not',
        '.map() can only be used on arrays and .forEach() can be used on any iterable',
        '.map() is used for mapping values and .forEach() is used for iterating'
      ],
      correctIndex: 0
  },
  {
      id: '7',
      question: 'What is the difference between synchronous and asynchronous code?',
      answers: [
        'Synchronous code is executed in the order it is written and asynchronous code is not',
        'Synchronous code is executed simultaneously and asynchronous code is not',
        'Synchronous code is executed by the browser and asynchronous code is executed by the server',
        'Synchronous code is executed faster than asynchronous code'
      ],
      correctIndex: 0
  },
        {
          id: '8',
          question: 'What is a pure function?',
          answers: [
          'A function that does not modify any variables outside of its scope',
          'A function that always returns the same output for the same input',
          'A function that does not call any other functions',
          'None of the above'
          ],
          correctIndex: 1
          },
          {
            id: '9',
            question: 'How can you remove the last element from an array in JavaScript?',
            answers: [
            'You can use the pop() method',
            'You can use the shift() method',
            'You can use the splice() method',
            'None of the above'
            ],
            correctIndex: 0
            },
          {
          id: '10',
          question: 'What is the difference between == and ===?',
          answers: [
          '== does type coercion, === does not',
          '== compares only values, === compares values and types',
          '== is faster than ===',
          'None of the above'
          ],
          correctIndex: 1
          },
          {
          id: '11',
          question: 'What is a higher-order function?',
          answers: [
          'A function that takes one or more functions as arguments',
          'A function that returns a new function',
          'A function that can be invoked multiple times',
          'All of the above'
          ],
          correctIndex: 3
          },
          {
          id: '14',
          question: 'What is the difference between a forEach loop and a map() method?',
          answers: [
          'forEach modifies original array, map() returns a new one',
          'forEach can only be used on arrays, map() can be used on any iterable',
          'forEach can return a value, map() cannot',
          'None of the above'
          ],
          correctIndex: 0
          },
          {
            id: 11,
            question: 'What is a callback function in JavaScript?',
            answers: [
              'A callback function is a function that is passed as an argument to another function and is executed after the parent function has completed',
              'A callback function is a function that is defined inside another function and is executed before the parent function has completed',
              'A callback function is a function that is defined inside an object and is executed after a certain event occurs',
              'A callback function is a function that is defined inside a loop and is executed on each iteration'
            ],
            correctIndex: 0
          },
          
         
            {
            id: '10',
            question: 'How can you add an element to an array in JavaScript?',
            answers: [
            'array.push()',
            'array.add()',
            'array.append()',
            'None of the above'
            ],
            correctIndex: 0
            },
            {
            id: '11',
            question: 'What is the difference between a forEach and a map method in JavaScript?',
            answers: [
            'forEach modifies the original array, map returns a new array',
            'forEach returns a new array, map modifies the original array',
            'forEach and map are the same thing',
            'None of the above'
            ],
            correctIndex: 0
            },
           
            {
            id: '13',
            question: 'What is the difference between let and var in JavaScript?',
            answers: [
            'let is block-scoped, var is function-scoped',
            'let is function-scoped, var is block-scoped',
            'let and var are the same thing',
            'None of the above'
            ],
            correctIndex: 0
            },
            {
            id: '14',
            question: 'What is the difference between null and undefined in JavaScript?',
            answers: [
            'null is explicitly set, undefined means a variable has been declared but has no value',
            'null means a variable has been declared but has no value, undefined is explicitly set',
            'null and undefined are the same thing',
            'None of the above'
            ],
            correctIndex: 0
            },
            {
            id: '15',
            question: 'What is the difference between a class component and a functional component in React?',
            answers: [
            'Class components use a class and a state, functional components use hooks and props',
            'Class components use hooks and props, functional components use a class and a state',
            'Class components and functional components are the same thing',
            'None of the above'
            ],
            correctIndex: 0
            },
            {
            id: '16',
            question: 'What is the useEffect hook used for in React?',
            answers: [
            'To handle side effects, such as data fetching or subscriptions',
            'To handle component lifecycle methods',
            'To handle events',
            'None of the above'
            ],
            correctIndex: 0
            },
    {
      id: '9',
      question: 'What is the difference between let and var?',
      answers: [
      'let is block scoped and var is function scoped',
      'let is hoisted and var is not',
      'let is immutable and var is mutable',
      'All of the above'
      ],
      correctIndex: 0
      },
      {
      id: '10',
      question: 'What is the difference between == and === ?',
      answers: [
      '== performs type coercion while === does not',
      '== compares values while === compares values and types',
      '== is faster than ===',
      'None of the above'
      ],
      correctIndex: 1
      },
      {
      id: '11',
      question: 'What is the difference between undefined and null?',
      answers: [
      'undefined means a variable has been declared but has not been assigned a value, while null means a variable has been assigned a value of null',
      'undefined is a keyword while null is an object',
      'null is a falsy value while undefined is a truthy value',
      'All of the above'
      ],
      correctIndex: 0
      },
      {
      id: '12',
      question: 'What is the difference between a forEach and a for...of loop?',
      answers: [
      'forEach only works on arrays, while for...of works on any iterable',
      'forEach can be used with a break statement while for...of cannot',
      'forEach only iterates over the values of an array, while for...of iterates over both the values and keys',
      'None of the above'
      ],
      correctIndex: 0
      },
      {
      id: '13',
      question: 'What is the difference between a for...in loop and a for...of loop?',
      answers: [
      'for...in loops through the keys of an object while for...of loops through the values of an iterable',
      'for...in loops through the values of an object while for...of loops through the keys of an iterable',
      'for...in loops through the properties of an object while for...of loops through the elements of an array',
      'None of the above'
      ],
      correctIndex: 0
      },
      {
      id: '14',
      question: 'What is hoisting?',
      answers: [
      'A mechanism in JavaScript where variable and function declarations are moved to the top of their scope',
      'A way to move elements in the DOM',
      'A method for handling errors',
      'None of the above'
      ],
      correctIndex: 0
      },
      {
      id: '15',
      question: 'What is closure?',
      answers: [
      'A function that has access to variables in its parent scope',
      'A way to prevent variables from being modified',
      'A method for compressing data',
      'None of the above'
      ],
      correctIndex: 0
      },
   


      {
        id: '9',
        question: 'What is the difference between a for-loop and a forEach loop in JavaScript?',
        answers: [
        'A for-loop allows you to use a counter and access the current index, while forEach only accesses the current element',
        'A for-loop only works with arrays, while forEach works with any type of iterable',
        'A for-loop allows you to break or continue the loop, while forEach does not',
        'None of the above'
        ],
        correctIndex: 0
        },
        {
        id: '10',
        question: 'What is the difference between a synchronous and an asynchronous function in JavaScript?',
        answers: [
        'Synchronous functions execute in the order they are called, while asynchronous do not',
        'Asynchronous functions can be paused and resumed later, while synchronous cannot',
        'Synchronous functions can only be called once, while asynchronous can be called multiple times',
        'None of the above'
        ],
        correctIndex: 0
        },
        {
        id: '11',
        question: 'How can you check if a variable is a number in JavaScript?',
        answers: [
        'You can use the isNaN() function',
        'You can use the typeof operator',
        'You can use the instanceof operator',
        'None of the above'
        ],
        correctIndex: 0
        },
        {
          id: '12',
          question: 'How can you check if a variable is an array in JavaScript?',
          answers: [
          'array.isArray()',
          'typeof variable === "array"',
          'Array.isArray(variable)',
          'None of the above'
          ],
          correctIndex: 2
          },


///

  {
    id: '8',
    question: 'What is closure in JavaScript?',
    answers: [
      'A function that returns another function',
      'A function that has access to variables in the parent scope',
      'A function that does not have access to variables in the parent scope',
      'A function that returns the global scope'
    ],
    correctIndex: 1
  },
  {
    id: '9',
    question: 'What is an anonymous function?',
    answers: [
      'A function that does not have a name',
      'A function that is not invoked immediately',
      'A function that does not have access to variables in the parent scope',
      'A function that returns the global scope'
    ],
    correctIndex: 0
  },
  {
    id: '10',
    question: 'What is the difference between undefined and null in JavaScript?',
    answers: [
      'Undefined means a variable has been declared but has not been assigned a value, while null is an assignment value.',
      'Undefined means a variable has been declared but has not been assigned a value, while null means a variable has not been declared.',
      'Undefined means a variable has not been declared, while null is an assignment value.',
      'Undefined means a variable has not been declared, while null means a variable has been declared but has not been assigned a value.'
    ],
    correctIndex: 0
  },
  {
    id: '11',
    question: 'What is the difference between let and var in JavaScript?',
    answers: [
      'Let is block-scoped, while var is function-scoped.',
      'Let is function-scoped, while var is block-scoped.',
      'Let is hoisted, while var is not.',
      'Let is not hoisted, while var is.'
    ],
    correctIndex: 0
  },
  {
    id: '12',
    question: 'What is the difference between == and === in JavaScript?',
    answers: [
      '== compares values, while === compares values and types.',
      '== compares values and types, while === compares only values.',
      '== compares only types, while === compares only values.',
      '== compares only types, while === compares values and types.'
    ],
    correctIndex: 0
  },
  {
    id: '13',
    question: 'What is the difference between the forEach() and map() methods in JavaScript?',
    answers: [
      'forEach() modifies the original array, while map() returns a new array.',
      'forEach() returns a new array, while map() modifies the original array.',
      'forEach() and map() are the same.',
      'forEach() is used for arrays, while map() is used for objects.'
    ],
    correctIndex: 0
  },



{
id: '9',
question: 'What is an event loop?',
answers: [
'A queue of functions that are executed by the JavaScript runtime',
'A way to handle user interactions',
'A way to handle asynchronous code execution',
'A way to handle errors'
],
correctIndex: 0
},
{
id: '10',
question: 'What is closure?',
answers: [
'A function that returns another function',
'A way to create private variables',
'A way to create protected variables',
'A way to create public variables'
],
correctIndex: 1
},
{
id: '11',
question: 'What is the difference between let and var?',
answers: [
'Let is block scoped, var is function scoped',
'Let is function scoped, var is block scoped',
'They are the same',
'Let is globally scoped, var is locally scoped'
],
correctIndex: 0
},
{
id: '12',
question: 'What is the difference between == and ===?',
answers: [
'== does type coercion, === does not',
'=== does type coercion, == does not',
'== checks for value equality, === checks for reference equality',
'=== checks for value equality, == checks for reference equality'
],
correctIndex: 0
},
{
id: '13',
question: 'What is a promise?',
answers: [
'A way to handle asynchronous code execution',
'A way to handle errors',
'A way to handle user interactions',
'A queue of functions that are executed by the JavaScript runtime'
],
correctIndex: 0
},
{
id: '14',
question: 'What is a generator function?',
answers: [
'A special type of function that can be paused and resumed',
'A way to create private variables',
'A way to create protected variables',
'A way to create public variables'
],
correctIndex: 0
},
{
id: '15',
question: 'What is a decorator?',
answers: [
'A way to modify existing functions',
'A way to modify existing classes',
'A way to modify existing variables',
'A way to modify existing arrays'
],
correctIndex: 1
},

  {
  id: '14',
  question: 'What is a higher-order function in JavaScript?',
  answers: [
  'A function that takes one or more functions as arguments and/or returns a function',
  'A function that takes an object as an argument and/or returns an object',
  'A function that takes a string as an argument and/or returns a string',
  'A function that takes an array as an argument and/or returns an array'
  ],
  correctIndex: 0
  },
  {
  id: '15',
  question: 'What is a callback function in JavaScript?',
  answers: [
  'A callback function is a function passed as an argument to another function, to be executed at a later time',
  'A callback function is a function that is returned from another function',
  'A callback function


  {
    id: 8,
    question: 'What is the difference between == and === in JavaScript?',
    answers: [
      '== compares values and type coercion is allowed, === compares both value and type without coercion',
      '== compares values and type coercion is not allowed, === compares both value and type with coercion',
      '== compares values only and type coercion is allowed, === compares both value and type without coercion',
      '== compares values only and type coercion is not allowed, === compares both value and type with coercion'
    ],
    correctIndex: 0
  },
  {
    id: 9,
    question: 'What is closure in JavaScript?',
    answers: [
      'A closure is a function that has access to variables in its parent scope, even after the parent function has returned',
      'A closure is a function that has access to variables in its child scope, even after the child function has returned',
      'A closure is a function that has access to variables in its global scope, even after the function has returned',
      'A closure is a function that has access to variables in its local scope, even after the function has returned'
    ],
    correctIndex: 0
  },
  {
    id: 10,
    question: 'What is an IIFE in JavaScript?',
    answers: [
      'An IIFE (Immediately Invoked Function Expression) is a function that is invoked as soon as it is defined',
      'An IIFE (Immediately Invoked Function Expression) is a function that is invoked once the entire script has loaded',
      'An IIFE (Immediately Invoked Function Expression) is a function that is invoked after a certain amount of time',
      'An IIFE (Immediately Invoked Function Expression) is a function that is invoked after an event occurs'
    ],
    correctIndex: 0
  },
 
  {
    id: 12,
    question: 'What is the difference between let and var in JavaScript?',
    answers: [
      'var has function scope and is hoisted to the top of its scope, let has block scope and is not hoisted',
      'var has block scope and is hoisted to the top of its scope, let has function scope and is not hoisted',
      'var has block scope and is not hoisted, let has function scope and is hoisted',
      'var has function scope and is not hoisted, let has block scope and is hoisted'
    ],
    correctIndex: 0
  },
  {
    id: '9',
    question: 'How do you declare a variable in JavaScript?',
    answers: [
    'var variableName = value;',
    'let variableName = value;',
    'const variableName = value;',
    'define variableName = value;'
    ],
    correctIndex: 0
    },
    {
    id: '10',
    question: 'What is the difference between == and === in JavaScript?',
    answers: [
    '== compares values without considering the data type while === compares both value and data type',
    '== compares both value and data type while === compares values without considering the data type',
    '== is used for assignment while === is used for comparison',
    '== and === are the same thing'
    ],
    correctIndex: 0
    },
    {
    id: '11',
    question: 'What is closure in JavaScript?',
    answers: [
    'A closure is a function object that has access to variables in its lexical scope, even when the function is invoked outside that scope.',
    'A closure is a block of code that can be executed at a later time',
    'A closure is a way to create private variables in JavaScript',
    'A closure is a way to make a function always return the same output'
    ],
    correctIndex: 0
    },
    {
    id: '12',
    question: 'What is the difference between let and var in JavaScript?',
    answers: [
    'let has block scope while var has function scope',
    'let is used to declare variables while var is used to declare functions',
    'let can be re-assigned a value while var cannot be re-assigned',
    'let is a newer feature in JavaScript while var is older'
    ],
    correctIndex: 0
    },
    {
    id: '13',
    question: 'What is the difference between null and undefined in JavaScript?',
    answers: [
    'null is a value that represents no value or no object, it is explicitly set by the developer. undefined means a variable has been declared but has not yet been assigned a value',
    'null means a variable has been declared but has not yet been assigned a value, undefined is a value that represents no value or no object, it is explicitly set by the developer.',
    'null and undefined are the same thing',
    'null is used for objects while undefined is used for variables'
    ],
    correctIndex: 0
    },
    {
    id: '14',
    question: 'What is a higher-order function in JavaScript?',
    answers: [
    'A function that takes one or more functions as arguments and/or returns a function',
    'A function that takes an object as an argument and/or returns an object',
    'A function that takes a string as an argument and/or returns a string',
    'A function that takes an array as an argument and/or returns an array'
    ],
    correctIndex: 0
    },

    {
      id: '15',
      question: 'What is the difference between let and var in JavaScript?',
      answers: [
        'let is block-scoped and var is function-scoped',
        'let is function-scoped and var is block-scoped',
        'let is hoisted and var is not',
        'let and var are the same'
      ],
      correctIndex: 0
    },
    {
      id: '16',
      question: 'What is closure in JavaScript?',
      answers: [
        'A function that returns another function',
        'A function that has access to variables in its parent scope',
        'A function that has access to the global scope',
        'A function that can be invoked multiple times'
      ],
      correctIndex: 1
    },
    {
      id: '17',
      question: 'What is event bubbling in JavaScript?',
      answers: [
        'Event propagates from child to parent elements',
        'Event propagates from parent to child elements',
        'Event propagates in the same element',
        'Event propagates in a random order'
      ],
      correctIndex: 1
    },
    {
      id: '18',
      question: 'What is the difference between == and === in JavaScript?',
      answers: [
        '== compares values and === compares both values and types',
        '== compares types and === compares both values and types',
        '== compares both values and types and === compares values',
        '== compares types and === compares values'
      ],
      correctIndex: 0
    },

    
    //resid



    {
      id: '15',
      question: 'What is the difference between let and var in JavaScript?',
      answers: [
        'let is block-scoped, var is function-scoped',
        'var is block-scoped, let is function-scoped',
        'let and var are both function-scoped',
        'let and var are both block-scoped'
      ],
      correctIndex: 1
    },
    {
      id: '16',
      question: 'What is closure in JavaScript?',
      answers: [
        'A closure is an inner function that has access to the variables in the outer (enclosing) function’s scope chain',
        'A closure is an anonymous function that can be passed around as an argument',
        'A closure is an object that retains the state of a function',
        'A closure is a way to make a variable private'
      ],
      correctIndex: 0
    },
    {
      id: '17',
      question: 'What is the difference between == and === in JavaScript?',
      answers: [
        '== compares values, === compares both value and type',
        '=== compares values, == compares both value and type',
        '== and === are the same',
        '== is for comparing objects, === is for comparing primitives'
      ],
      correctIndex: 0
    },
    {
      id: '18',
      question: 'What is the difference between null and undefined in JavaScript?',
      answers: [
        'null is a value, undefined is a variable that has been declared but has no value assigned',
        'undefined is a value, null is a variable that has been declared but has no value assigned',
        'null and undefined are the same',
        'null is an object, undefined is a primitive'
      ],
      correctIndex: 1
    },
    {
      id: '19',
      question: 'What is the difference between a forEach loop and a for loop in JavaScript?',
      answers: [
        'A forEach loop can only be used on arrays, a for loop can be used on any iterable',
        'A for loop can only be used on arrays, a forEach loop can be used on any iterable',
        'A forEach loop is faster than a for loop',
        'A for loop is faster than a forEach loop'
      ],
      correctIndex: 0
    },
  
    {
      id: '19',
      question: 'What is the difference between push and unshift in JavaScript?',
      answers: [
      'push adds to the end of an array, unshift adds to the beginning',
      'unshift adds to the end of an array, push adds to the beginning',
      'push removes elements from an array, unshift adds to it',
      'unshift removes elements from an array, push adds to it'
      ],
      correctIndex: 0
      },
      {
      id: '20',
      question: 'What is closure in JavaScript?',
      answers: [
      'A function that has access to variables in its parent scope',
      'A function that has access to variables in its global scope',
      'A function that does not have access to any variables',
      'A function that only has access to its own variables'
      ],
      correctIndex: 0
      }



      {
        id: '16',
        question: 'What is closure in JavaScript?',
        answers: [
          'A function that returns another function',
          'A function that keeps access to variables in its parent scope',
          'A function that is defined inside another function',
          'A function that cannot access variables in its parent scope'
        ],
        correctIndex: 1
      },
      {
        id: '17',
        question: 'What is the difference between let and var in JavaScript?',
        answers: [
          'let is block scoped, var is function scoped',
          'let is function scoped, var is block scoped',
          'let is hoisted, var is not',
          'let is not hoisted, var is'
        ],
        correctIndex: 0
      },
      {
        id: '18',
        question: 'What is the difference between == and === in JavaScript?',
        answers: [
          '== compares values, === compares values and types',
          '== compares types, === compares values',
          '== compares values and types, === compares values',
          '== compares types, === compares values and types'
        ],
        correctIndex: 0
      },
      {
        id: '19',
        question: 'What is the difference between null and undefined in JavaScript?',
        answers: [
          'null is a value, undefined is a variable assignment',
          'null is a variable assignment, undefined is a value',
          'null is an object, undefined is not',
          'null is not an object, undefined is'
        ],
        correctIndex: 1
      },
      {
        id: '20',
        question: 'What is the use of the spread operator in JavaScript?',
        answers: [
          'To combine arrays or objects',
          'To extract values from arrays or objects',
          'To copy arrays or objects',
          'To split arrays or objects'
        ],
        correctIndex: 2
      },

      {
        "id": "19",
        "question": "What is event capturing in JavaScript?",
        "answers": [
        "The process of an event propagating from the outermost element to the innermost element",
        "The process of an event propagating from the innermost element to the outermost element",
        "The process of an event stopping its propagation after the first element",
        "The process of an event propagating to all elements with the same class"
        ],
        "correctIndex": 0
        },




      ]

    /* {
    id: '58694a0f-3da1-471f-bd96-145571e29d70',
    question: 'What are the different data types present in javascript?',
    answers: ['String ','Number ','Boolean ','ALL OF THOSE'],
    correctIndex:1
    },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d721',
    question: 'Difference between “ == “ and “ === “ operators. ? ',
    answers: ['Ohh Common','Zzzzz.. ','Type and Shit','Returns true '],
    correctIndex:2
    },
     {
     id: '58694a0f-3da1-4719d722',
    question: 'What is NaN property in JavaScript?',
    answers: ['Not-a-Number','Typeof Number',' Not a legal number','ALL OF THOSE'],
    correctIndex:3
    },
     {
    id: '58694a0f-3da1-471f-bd96-245732',
    question: 'What do you mean by strict mode in javascript and characteristics of javascript strict-mode? ',
    answers: [' simpler debugging','strict" operational','avoid bugs','ALL OF THOSE'],
    correctIndex:1
    },
     {
    id: '586941-471f-bd96-229d472',
    question: 'Mention some advantages of javascript. ',
    answers: ['c-side and s-side','simple ','Web pages ','ALL OF THOSE'],
    correctIndex:3
    },
     {
    id: '58694a0f-3da1-471f-bd96-24e29d752',
    question: 'What is the difference between the ES6 and ES5 standards?',
    answers: ['Components and Function','exports vs export','require vs import','ALL OF THE ABOVE'],
    correctIndex:3
    },
     {
    id: '58694a0f-3da1-471d96-245571e29d672',
    question: 'What are object prototypes? ',
    answers: ['Date prototype','Math prototype',' Array prototype ','ALL OF THE ABOVE'],
    correctIndex:3
    },
     {
    id: '58694a0f-3da1-471f-bd96-245571e772',
    question: 'How do you create a React app ? ',
    answers: ['Install NodeJS','Install CLI','Install a text editor ','ALL OF THE ABOVE'],
    correctIndex:3
    },
    {
    id: '58694a0f-3da1-471f-e298d72',
    question: 'Explain how lists work in React ? ',
    answers: ['as in regular JavaScript','add key','use map()','ALL THE ABOVE'],
    correctIndex:3
    },
    {
    id: '5869110f-3da1-471f-bd96-245571e29',
    question: 'How do you create forms in React? ',
    answers: ['ADD FORM TAG','ADD SUBMIT','ADD HANDLER','ALL OF THE ABOVE'],
    correctIndex:3
    }
  ]
export default Html5Questions */