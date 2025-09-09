const questions = [
    {
        "Question": 'What is the simplified expression for the Boolean function F(A, B, C, D) = Σ(0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14) using the K-map method?',
        "Options": {
            "A": "A'B'C'D' + A'B'C'D + A'BC'D + AB'C'D + ABCD",
            "B": "A'B'C'D' + A'BC'D + AB'C'D + ABC'D + ABCD",
            "C": "A'B'C'D' + A'BC'D + ABC'D + ABCD",
            "D": "A'B'C'D' + A'BC'D' + A'BCD + ABCD"
        },
        'right_answer': "A'B'C'D' + A'B'C'D + A'BC'D + AB'C'D + ABCD",
         "id": 0
    },
    {
        "Question": 'In a PLA, what components are used to implement the combinational logic functions?',
        "Options": {
            "A": 'AND gates and OR gates',
            "B": 'NAND gates and XOR gates',
            "C": 'NOR gates and XNOR gates',
            "D": 'NOT gates and multiplexers'
        },
        'right_answer': 'AND gates and OR gates',
        "id": 1
    },
    {
        "Question": 'Which type of register is primarily used to temporarily hold data during arithmetic and logical operations in a microprocessor?',
        "Options": {
            "A": 'Shift register',
            "B": 'Parallel register',
            "C": 'Accumulator register',
            "D": 'Counter register'
        },
        'right_answer': 'Accumulator register',
        "id": 2
    },
    {
        "Question": 'Which logic family uses both depletion and enhancement mode MOSFETs for its operation?',
        "Options": { "A": 'TTL', "B": 'ECL', "C": 'PMOS', "D": 'CMOS' },
        'right_answer': 'CMOS',
        "id": 3
    },
    {
        "Question": 'What is the primary difference between ROM and RAM?',
        "Options": {
            "A": 'ROM is faster than RAM',
            "B": 'ROM is volatile, while RAM is non-volatile',
            "C": 'ROM is used for data storage, while RAM is used for program execution',
            "D": 'ROM stores permanent data that cannot be changed, while RAM stores temporary data that can be read and written'
        },
        'right_answer': 'ROM stores permanent data that cannot be changed, while RAM stores temporary data that can be read and written',
        "id": 4
    },
    {
        "Question": 'Given a Boolean function F(A, B, C) = Σ(0, 1, 2, 3, 5), what is the expression in SOP form?',
        "Options": {
            "A": "A'B' + AB' + AB + AC",
            "B": 'A + B + C',
            "C": "AB' + C'",
            "D": "A'B'C'"
        },
        'right_answer': "A'B' + AB' + AB + AC",
        "id": 5
    },
    {
        "Question": 'If the sum of two positive binary numbers is 11010 and there is a carry-out from the MSB, what should be done to obtain the correct result?',
  "Options": {
        "A": 'Discard the carry',
        "B": 'Add the carry to the least significant bit (LSB)',
        "C": 'Add the carry to the most significant bit (MSB)',
        "D": 'Subtract the carry from the MSB'
    },
    'right_answer': 'Add the carry to the least significant bit (LSB)',
    "id": 6
},
{
    "Question": 'In binary multiplication using the simple method, what is the first step after aligning the digits and preparing for multiplication?',
        "Options": {
        "A": 'Multiply the least significant bit (LSB) by the multiplier',
            "B": 'Multiply the most significant bit (MSB) by the multiplier',
                "C": 'Multiply the least significant bit (LSB) by the multiplicand',
                    "D": 'Multiply the most significant bit (MSB) by the multiplicand'
    },
    'right_answer': 'Multiply the least significant bit (LSB) by the multiplier',
        "id": 7
},
{
    "Question": 'What is the relationship between the distance between parity bits and their error detection and correction capability in Hamming Code?',
        "Options": {
        "A": 'Closer parity bits provide higher error correction capability',
            "B": 'Closer parity bits provide lower error correction capability',
                "C": 'Distance between parity bits has no impact on error correction capability',
                    "D": 'The position of parity bits is irrelevant in Hamming Code'
    },
    'right_answer': 'Closer parity bits provide lower error correction capability',
        "id": 8
},
{
    "Question": 'To convert a Gray Code to its binary equivalent, which technique is commonly used?',
        "Options": {
        "A": 'Subtraction method',
            "B": 'Addition method',
                "C": 'Exclusive OR (XOR) operation',
                    "D": 'Division method'
    },
    'right_answer': 'Exclusive OR (XOR) operation',
        "id": 9
},
{
    "Question": 'Which component of an ideal microcomputer is responsible for temporarily holding data and instructions during processing?',
        "Options": { "A": 'CPU', "B": 'ALU', "C": 'Memory', "D": 'Output devices' },
    'right_answer': 'Memory',
        "id": 10
},
{
    "Question": 'How is the width of the data bus typically measured in a microcomputer system?',
        "Options": {
        "A": 'In kilobytes (KB)',
            "B": 'In megahertz (MHz)',
                "C": 'In bits',
                    "D": 'In address lines'
    },
    'right_answer': 'In bits',
        "id": 11
},
{
    "Question": 'Microcontrollers find application in various fields. What is a typical application of microcontrollers in the automotive industry?',
        "Options": {
        "A": 'Operating systems for computers',
            "B": 'Entertainment systems in airplanes',
                "C": 'Engine control in cars',
                    "D": 'Weather forecasting systems'
    },
    'right_answer': 'Engine control in cars',
        "id": 12
},
{
    "Question": 'Which data structure often results in a time-space tradeoff by using extra memory to speed up operations?',
        "Options": { "A": 'Arrays', "B": 'Linked lists', "C": 'Hash tables', "D": 'Stacks' },
    'right_answer': 'Hash tables',
        "id": 13
},
{
    "Question": "Which term refers to the strategy of optimizing an algorithm's use of resources, often by making sacrifices in one aspect for improvements in another?",
        "Options": {
        "A": 'Greedy algorithm',
            "B": 'Divide and conquer',
                "C": 'Dynamic programming',
                    "D": 'Tradeoff'
    },
    'right_answer': 'Tradeoff',
        "id": 14
},
{
    "Question": 'Conditional asymptotic notation allows for a more nuanced analysis of algorithm behavior under specific conditions. This is particularly useful when: ',
    "Options": {
        "A": 'Analyzing algorithms with constant time complexity',
            "B": 'The input size is fixed',
                "C": 'The input data is random',
                    "D": 'Algorithm behavior varies based on certain input characteristics'
    },
    'right_answer': 'Algorithm behavior varies based on certain input characteristics',
        "id": 15
},
{
    "Question": `If an algorithm's behavior is bounded by "o(f(n)) if g(n)", what notation does it become when the condition is removed?`,
        "Options": {
        "A": 'o(f(n))',
            "B": 'o(g(n))',
                "C": 'o(f(n) + g(n))',
                    "D": 'o(f(n) * g(n))'
    },
    'right_answer': 'o(f(n))',
        "id": 16
},
{
    "Question": 'The recurrence equation T(n) = T(n/2) + 1 represents the time complexity of which algorithmic paradigm?',
        "Options": {
        "A": 'Divide and Conquer',
            "B": 'Greedy Algorithms',
                "C": 'Dynamic Programming',
                    "D": 'Brute Force'
    },
    'right_answer': 'Divide and Conquer',
        "id": 17
},
{
    "Question": 'Divide and Conquer is an algorithmic paradigm that solves problems by:',
        "Options": {
        "A": 'Iteratively solving subproblems',
            "B": 'Recursively solving subproblems',
                "C": 'Using heuristics to find solutions',
                    "D": 'Greedily combining solutions'
    },
    'right_answer': 'Recursively solving subproblems',
        "id": 18
},
{
    "Question": 'A threaded binary tree is a binary tree in which:',
        "Options": {
        "A": 'Each node has two children',
            "B": 'Each node has at most one child',
                "C": 'Each node is connected to its parent',
                    "D": 'Each node has a thread connecting it to its predecessor or successor'
    },
    'right_answer': 'Each node has a thread connecting it to its predecessor or successor',
        "id": 19
},
{
    "Question": 'Which traversal algorithm is typically implemented using a stack data structure?',
        "Options": {
        "A": 'DFS',
            "B": 'BFS',
                "C": 'Both DFS and BFS',
                    "D": 'Neither DFS nor BFS'
    },
    'right_answer': 'DFS',
        "id": 20
},
{
    "Question": 'In a directed graph, an edge that points from vertex A to vertex B is denoted as:',
        "Options": { "A": '(A, B)', "B": '[A, B]', "C": '<A, B>', "D": '{A, B}' },
    'right_answer': '(A, B)',
        "id": 21
},
{
    "Question": 'Separate chaining involves storing collided elements in separate data structures, typically in:',
        "Options": { "A": 'Linked lists', "B": 'Arrays', "C": 'Stacks', "D": 'Queues' },
    'right_answer': 'Linked lists',
        "id": 22
},
{
    "Question": 'Which collision resolution technique involves placing collided elements in the next available empty slot in the hash table?',
        "Options": {
        "A": 'Linear probing',
            "B": 'Quadratic probing',
                "C": 'Separate chaining',
                    "D": 'Double hashing'
    },
    'right_answer': 'Linear probing',
        "id": 23
},
{
    "Question": 'In the Tower of Hanoi problem with "n" disks, how many moves are required to solve the problem?',
        "Options": { "A": 'n', "B": '2n', "C": '2^n - 1', "D": '2^n' },
    'right_answer': '2^n - 1',
        "id": 24
},
{
    "Question": 'The process of removing recursion involves replacing recursive function calls with:',
        "Options": {
        "A": 'More recursive function calls',
            "B": 'Loops',
                "C": 'Additional memory allocation',
                    "D": 'Non-recursive function calls'
    },
    'right_answer': 'Loops',
        "id": 25
},
{
    "Question": 'A formal model of protection in an operating system provides:',
        "Options": {
        "A": 'A mathematical framework for analyzing resource allocation',
            "B": 'Guidelines for designing user interfaces',
                "C": 'Methods for optimizing memory management',
                    "D": 'Techniques for improving CPU utilization'
    },
    'right_answer': 'A mathematical framework for analyzing resource allocation',
        "id": 26
},
{
    "Question": 'In an operating system, a "buffer cache" is used to:',
        "Options": {
        "A": 'Store files in memory',
            "B": 'Store copies of frequently used files in memory',
                "C": 'Store the operating system kernel',
                    "D": 'Store input/output devices'
    },
    'right_answer': 'Store copies of frequently used files in memory',
        "id": 27
},
{
    "Question": 'File manipulation operations in an operating system include:',
        "Options": {
        "A": 'Allocating memory to files',
            "B": 'Assigning file names to processes',
                "C": 'Loading files into CPU registers',
                    "D": 'Reading, writing, and modifying file content'
    },
    'right_answer': 'Reading, writing, and modifying file content',
        "id": 28
},
{
    "Question": 'The I/O subsystem in an operating system is responsible for:',
        "Options": {
        "A": 'Allocating memory for processes',
            "B": 'Managing the file system',
                "C": 'Managing input/output operations between processes and input/output devices',
                    "D": 'Allocating CPU time to processes'
    },
    'right_answer': 'Managing input/output operations between processes and input/output devices',
        "id": 29
},
{
    "Question": 'The primary goal of load control is to:',
        "Options": {
        "A": 'Prevent processes from running concurrently',
            "B": 'Avoid context switching between processes',
                "C": 'Ensure that CPU time is evenly distributed among processes',
                    "D": 'Maximize the usage of virtual memory'
    },
    'right_answer': 'Ensure that CPU time is evenly distributed among processes',
        "id": 30
},
{
    "Question": 'The purpose of a page table in a paging system is to:',
        "Options": {
        "A": 'Store pages of memory',
            "B": 'Manage input/output operations',
                "C": 'Translate virtual addresses to physical addresses',
                    "D": 'Store program instructions'
    },
    'right_answer': 'Translate virtual addresses to physical addresses',
        "id": 31
},
{
    "Question": 'In multiprogramming with fixed partitions, if a process requires more memory than is available in a partition, it may lead to:',
        "Options": {
        "A": 'Fragmentation',
            "B": 'Deadlock',
                "C": 'Priority inversion',
                    "D": 'Starvation'
    },
    'right_answer': 'Fragmentation',
        "id": 32
},
{
    "Question": 'What is DBMS?',
        "Options": {
        "A": 'DBMS is a collection of queries',
            "B": 'DBMS is a high-level language',
                "C": 'DBMS is a programming language',
                    "D": 'DBMS stores, modifies and retrieves data'
    },
    'right_answer': 'DBMS stores, modifies and retrieves data',
        "id": 33
},
{
    "Question": 'Which of the following is correct according to the technology deployed by DBMS?',
        "Options": {
        "A": 'Pointers are used to maintain transactional integrity and consistency',
            "B": 'Cursors are used to maintain transactional integrity and consistency',
                "C": 'Locks are used to maintain transactional integrity and consistency',
                    "D": 'Triggers are used to maintain transactional integrity and consistency'
    },
    'right_answer': 'Locks are used to maintain transactional integrity and consistency',
        "id": 34
},
{
    "Question": 'The term "NTFS" refers to which one of the following?',
        "Options": {
        "A": 'New Technology File System',
            "B": 'New Tree File System',
                "C": 'New Table type File System',
                    "D": 'Both A and C'
    },
    'right_answer': 'New Technology File System',
        "id": 35
},
{
    "Question": "Which of the following is a top-down approach in which the entity's higher level can be divided into two lower sub-entities?",
        "Options": {
        "A": 'Aggregation',
            "B": 'Generalization',
                "C": 'Specialization',
                    "D": 'All of the above'
    },
    'right_answer': 'Specialization',
        "id": 36
},
{
    "Question": 'The term "DFD" stands for?',
        "Options": {
        "A": 'Data file diagram',
            "B": 'Data flow document',
                "C": 'Data flow diagram',
                    "D": 'None of the above'
    },
    'right_answer': 'Data flow diagram',
        "id": 37
},
{
    "Question": 'The term "FAT" stands for_____',
        "Options": {
        "A": 'File Allocation Tree',
            "B": 'File Allocation Table',
                "C": 'File Allocation Graph',
                    "D": 'All of the above'
    },
    'right_answer': 'File Allocation Table',
        "id": 38
},
{
    "Question": 'The term "Data" refers to:',
        "Options": {
        "A": 'The electronic representation of the information(or data)',
            "B": 'Basic information',
                "C": 'Row Facts and figures',
                    "D": 'Both A and C'
    },
    'right_answer': 'Row Facts and figures',
        "id": 39
},
{
    "Question": 'What is the primary function of routing in the network layer?',
        "Options": {
        "A": 'Data framing',
            "B": 'Error correction',
                "C": 'Finding the best path for data',
                    "D": 'Flow control'
    },
    'right_answer': 'Finding the best path for data',
        "id": 40
},
{
    "Question": 'What is a socket in the context of process-to-process communication?',
        "Options": {
        "A": 'A hardware device for data transmission',
            "B": 'A software interface for network communication',
                "C": 'A type of cable used for high-speed data transmission',
                    "D": 'Type of network topology'
    },
    'right_answer': 'A software interface for network communication',
        "id": 41
},
{
    "Question": 'Data transmission using multiple pathways simultaneously is known as:',
        "Options": {
        "A": 'Parallel Transmission',
            "B": 'Serial Transmission',
                "C": 'Duplex Transmission',
                    "D": 'Half-duplex Transmission'
    },
    'right_answer': 'Parallel Transmission',
        "id": 42
},
{
    "Question": 'Which of the following is NOT a network topology?',
        "Options": { "A": 'Star', "B": 'Ring', "C": 'Disk', "D": 'Mesh' },
    'right_answer': 'Disk',
        "id": 43
},
{
    "Question": 'Contention-based MAC protocols are commonly used in:',
        "Options": {
        "A": 'Ethernet networks',
            "B": 'Token Ring networks',
                "C": 'ATM networks',
                    "D": 'Point-to-Point networks'
    },
    'right_answer': 'Ethernet networks',
        "id": 44
},
{
    "Question": 'Routing involves:',
        "Options": {
        "A": 'Dividing data into frames',
            "B": 'Managing flow control',
                "C": 'Determining the best path for data packets',
                    "D": 'Correcting errors in data transmission'
    },
    'right_answer': 'Determining the best path for data packets',
        "id": 45
},
{
    "Question": 'What is the purpose of ARP (Address Resolution Protocol)?',
        "Options": {
        "A": 'To assign IP addresses to devices',
            "B": 'To resolve domain names to IP addresses',
                "C": 'To map MAC addresses to IP addresses',
                    "D": 'To manage network congestion'
    },
    'right_answer': 'To map MAC addresses to IP addresses',
        "id": 46
},
{
    "Question": 'Which software life cycle model allows for iterative development and incorporates risk analysis?',
        "Options": {
        "A": 'Waterfall model',
            "B": 'Prototype model',
                "C": 'Spiral model',
                    "D": 'Agile model'
    },
    'right_answer': 'Spiral model',
        "id": 47
},
{
    "Question": 'What is the main goal of software quality assurance?',
        "Options": {
        "A": 'To eliminate all defects from the software',
            "B": 'To ensure the software is defect-free before release',
                "C": 'To establish and enforce standards and processes to improve software quality',
                    "D": 'To test software under different conditions'
    },
    'right_answer': 'To establish and enforce standards and processes to improve software quality',
        "id": 48
},
{
    "Question": 'Reverse engineering is primarily used for:',
        "Options": {
        "A": 'Creating new software from scratch',
            "B": 'Improving software performance',
                "C": 'Understanding and documenting existing software',
                    "D": 'Testing software components'
    },
    'right_answer': 'Understanding and documenting existing software',
        "id": 49
},
{
    "Question": 'Which testing approach involves testing individual components or units of code?',
        "Options": {
        "A": 'Integration Testing',
            "B": 'System Testing',
                "C": 'Unit Testing',
                    "D": 'Acceptance Testing'
    },
    "right_answer": 'Unit Testing',
        "id": 50
},
{
    "Question": 'What is the main goal of System Testing?',
        "Options": {
        "A": 'Testing individual components in isolation',
            "B": 'Testing the integration between different software components',
                "C": "Testing software functionality from the user's perspective",
                    "D": 'Identifying defects in the source code'
    },
    "right_answer": "Testing software functionality from the user's perspective",
        "id": 51
},
{
    "Question": 'Which metric is used for estimating the size of a software project?',
        "Options": {
        "A": 'Cyclomatic Complexity',
            "B": 'Function Points (FP)',
                "C": 'Defect Density',
                    "D": 'Software Reliability Index'
    },
    "right_answer": 'Function Points (FP)',
        "id": 52
},
{
    "Question": 'What is the purpose of staffing level estimation in software project management?',
        "Options": {
        "A": 'To determine the number of hardware components required',
            "B": 'To identify potential risks in the project',
                "C": 'To allocate appropriate resources to the project',
                    "D": 'To estimate the maintenance costs of the software'
    },
    "right_answer": 'To identify potential risks in the project',
        "id": 53
},
{
    "Question": 'Which keyword is used to create an instance of a class in most programming languages?',
        "Options": { "A": 'alloc', "B": 'new', "C": 'create', "D": 'instance' },
    "right_answer": 'new',
        "id": 54
},
{
    "Question": 'What is an abstract class in OOP?',
        "Options": {
        "A": 'A class with no methods',
            "B": 'A class that cannot be instantiated',
                "C": 'A class that can only have private members',
                    "D": 'A class that cannot have methods with parameters'
    },
    "right_answer": 'A class that cannot be instantiated',
        "id": 55
},
{
    "Question": 'What is the purpose of the "super" keyword in Java and other similar languages?',
        "Options": {
        "A": 'It refers to the superclass in inheritance',
            "B": 'It creates a new object instance',
                "C": 'It defines a new class',
                    "D": 'It handles exceptions'
    },
    "right_answer": 'It refers to the superclass in inheritance',
        "id": 56
},
{
    "Question": 'Which of the following best defines a class?',
        "Options": {
        "A": 'An instance of an object',
            "B": 'A blueprint for creating objects',
                "C": 'A variable holding data',
                    "D": 'A function with a return value'
    },
    "right_answer": 'A blueprint for creating objects',
        "id": 57
},
{
    "Question": 'Which principle ensures that only essential information is visible to the outside world?',
        "Options": {
        "A": 'Polymorphism',
            "B": 'Information hiding',
                "C": 'Encapsulation',
                    "D": 'Abstraction'
    },
    "right_answer": 'Information hiding',
        "id": 58
},
{
    "Question": 'What is the main purpose of inheritance in OOP?',
        "Options": {
        "A": 'To create instances of classes',
            "B": 'To prevent data abstraction',
                "C": 'To establish a parent-child relationship between classes',
                    "D": 'To define exceptions'
    },
    "right_answer": 'To establish a parent-child relationship between classes',
        "id": 59
},
{
    "Question": 'What are abstract methods?',
        "Options": {
        "A": 'Methods that are inaccessible to the outside world',
            "B": 'Methods that have implementation details',
                "C": 'Methods without a body, defined in an abstract class',
                    "D": 'Methods that cannot be inherited'
    },
    "right_answer": 'Methods without a body, defined in an abstract class',
        "id": 60
},
{
    "Question": 'Which protocol is commonly used for sending emails?',
        "Options": { "A": '.HTTPS', "B": 'FTP', "C": 'SMTP', "D": 'TCP' },
    "right_answer": 'SMTP',
        "id": 61
},
{
    "Question": 'What does CSS stand for?',
        "Options": {
        "A": 'Cascading Style System',
            "B": 'Creative Styling Script',
                "C": 'Computer Style Sheets',
                    "D": 'Cascading Style Sheets'
    },
    "right_answer": 'Cascading Style Sheets',
        "id": 62
},
{
    "Question": 'Which library simplifies JavaScript tasks like HTML document traversal and manipulation?',
        "Options": { "A": 'JavaFX', "B": 'Bootstrap', "C": 'React', "D": 'jQuery' },
    "right_answer": 'jQuery',
        "id": 63
},
{
    "Question": 'What does AJAX stand for?',
        "Options": {
        "A": 'Asynchronous JavaScript and XML',
            "B": 'Automated JavaScript and XHTML',
                "C": 'Advanced JavaScript and XML',
                    "D": 'Asynchronous JSON and XHTML'
    },
    "right_answer": 'Asynchronous JavaScript and XML',
        "id": 64
},
{
    "Question": 'How does the DOM tree structure reflect the hierarchy of HTML elements?',
        "Options": {
        "A": 'In alphabetical order',
            "B": "Based on the element's size",
                "C": 'In a parent-child relationship',
                    "D": "According to the element's color"
    },
    "right_answer": 'In a parent-child relationship',
        "id": 65
},
{
    "Question": 'In XML, which attribute is used to uniquely identify an element?',
        "Options": { "A": 'id', "B": 'class', "C": 'name', "D": 'tag' },
    "right_answer": 'id',
        "id": 66
},
{
    "Question": 'The Kleene Star operation accepts the following string of finite length over set A = {0,1} | where string s contains even number of 0 and 1.',
        "Options": {
        "A": '01, 0011,010101',
            "B": '0011, 11001100',
                "C": 'ε, 0011, 11001101',
                    "D": 'ε, 0011, 11001100'
    },
    "right_answer": 'ε, 0011, 11001100',
        "id": 67
},
{
    "Question": 'A Language for which DFA exist is a________',
        "Options": {
        "A": 'Regular Language',
            "B": 'Non-Regular Language',
                "C": 'Any language',
                    "D": 'Cannot be said'
    },
    "right_answer": 'Regular Language',
        "id": 68
},
{
    "Question": 'Let u=’1101’, v=’0001’, then uv=11010001 and vu= 00011101.Using the given information what is the identity element for the string?',
        "Options": { "A": 'u-1', "B": 'v-1', "C": 'u-1v-1', "D": 'ε' },
    "right_answer": 'ε',
        "id": 69
},
{
    "Question": 'For a DFA accepting binary numbers whose decimal equivalent is divisible by 3, what are all the possible remainders?',
        "Options": { "A": '0', "B": '0,2', "C": '0,1,2', "D": '0,1,2,3' },
    "right_answer": '0,1,2',
        "id": 70
},
{
    "Question": 'Minimum Number of states require to accept string ends with 101.',
        "Options": { "A": '3', "B": '2', "C": '1', "D": 'can’t be represented' },
    "right_answer": '2',
        "id": 71
},
{
    "Question": 'If NFA of 5 states excluding the initial state is converted into DFA, maximum possible number of states for the DFA is?',
        "Options": { "A": '64', "B": '32', "C": '128', "D": '187' },
    "right_answer": '64',
        "id": 72
},
{
    "Question": 'The class of CFG is not closed under',
        "Options": {
        "A": 'Concatenation',
            "B": 'Intersection',
                "C": 'Union',
                    "D": 'Repeated Concatenation.'
    },
    "right_answer": 'Repeated Concatenation.',
        "id": 73
},
{
    "Question": 'Which among the following is not true about IoT?',
        "Options": {
        "A": 'IoT uses Micro Controllers',
            "B": 'IoT is fully safe',
                "C": 'IoT uses Sensors and Actuators',
                    "D": 'IoT uses wireless technology'
    },
    "right_answer": 'IoT is fully safe',
        "id": 74
},
{
    "Question": 'About IoT, which among the followings is not correct?',
        "Options": {
        "A": 'Light sensor is analog',
            "B": 'microphone is a digital sensor',
                "C": 'Keyboard is a digital sensor',
                    "D": 'Push button is a digital Sensor'
    },
    "right_answer": 'microphone is a digital sensor',
        "id": 75
},
{
    "Question": 'BLE stands for',
        "Options": {
        "A": 'Bluetooth large energy',
            "B": 'Bluetooth low energy',
                "C": 'Bluetooth light energy',
                    "D": 'Bluetooth long energy'
    },
    "right_answer": 'Bluetooth low energy',
        "id": 76
},
{
    "Question": 'WSN stands for?',
        "Options": {
        "A": 'Wireless Standard Protocol',
            "B": 'Wireless Sensor Protocol',
                "C": 'Wireless Serial Protocol',
                    "D": 'Wireless Single Protocol'
    },
    "right_answer": 'Wireless Sensor Protocol',
        "id": 77
},
{
    "Question": 'A complex SCADA system has _______levels?',
        "Options": { "A": '6', "B": '5', "C": '3', "D": '4' },
    "right_answer": '4',
        "id": 78
},
{
    "Question": 'What is the role of the MISO pin in the RFID Module?',
        "Options": {
        "A": 'Master In Slave Out',
            "B": 'Manage Internal Slave Output',
                "C": 'Master Internal Search Optimization',
                    "D": 'Manage Input Slave Op'
    },
    "right_answer": 'Master In Slave Out',
        "id": 79
},
{
    "Question": 'Who is known as the father of AI?',
        "Options": {
        "A": 'Fisher Ada',
            "B": 'Alan Turing',
                "C": 'John McCarthy',
                    "D": 'Allen Newell'
    },
    "right_answer": 'John McCarthy',
        "id": 80
},
{
    "Question": 'Programming language commonly used for AI is___?',
        "Options": { "A": 'Lisp', "B": 'Perl', "C": 'Prolog', "D": 'C++' },
    "right_answer": 'Perl',
        "id": 81
},
{
    "Question": 'The algorithm used in the Game tree to make decisions of Win/Lose is ________________?',
        "Options": {
        "A": 'Heuristic Search Algorithm',
            "B": 'DFS/ BFL algorithm',
                "C": 'Greedy Search algorithm',
                    "D": 'Min/Max algorithm'
    },
    "right_answer": 'Min/Max algorithm',
        "id": 82
},
{
    "Question": 'Uniform-cost search expands the node n with the __________',
        "Options": {
        "A": 'Lowest path cost',
            "B": 'Heuristic cost',
                "C": 'Highest path cost',
                    "D": 'Average path cost'
    },
    "right_answer": 'Lowest path cost',
        "id": 83
},
{
    "Question": 'The A* search algorithm uses _______',
        "Options": {
        "A": 'A heuristic function only',
            "B": 'Cost function only',
                "C": 'Both heuristic and cost function',
                    "D": 'None of the above'
    },
    "right_answer": 'Both heuristic and cost function',
        "id": 84
},
{
    "Question": 'The process of removing detail from a given state representation is called ______',
        "Options": {
        "A": 'Extraction',
            "B": 'Abstraction',
                "C": 'Data Mining',
                    "D": 'Information Retrieval'
    },
    "right_answer": 'Abstraction',
        "id": 85
},
{
    "Question": 'What does a first order predicate logic contain?',
        "Options": {
        "A": 'Predicate and a subject',
            "B": 'Predicate and a Preposition',
                "C": 'Subject and an object',
                    "D": 'None of the above'
    },
    "right_answer": 'Predicate and a subject',
        "id": 86
},
{
    "Question": 'Which of the following can improve the performance of AI agent?',
        "Options": {
        "A": 'Precision',
            "B": 'Learning',
                "C": 'Observing',
                    "D": 'All of the above'
    },
    "right_answer": 'Learning',
        "id": 87
},
{
    "Question": 'Which of the following is part of the four main types for e-commerce?',
        "Options": { "A": 'B2B', "B": 'B2C', "C": 'C2B', "D": 'All of the above' },
    "right_answer": 'All of the above',
        "id": 88
},
{
    "Question": 'What is the process in which a buyer posts its interest in buying a certain quantity of items, and sellers compete for the business by submitting successively lower bids until there is only one seller left?',
        "Options": {
        "A": 'B2B Marketplace',
            "B": 'Auction',
                "C": 'Reverse Auction',
                    "D": 'Intranet'
    },
    "right_answer": 'Reverse Auction',
        "id": 89
},
{
    "Question": 'If it is easy for competitors to enter the market, the threat of new entrants is considere"d":',
        "Options": { "A": 'Low', "B": 'High', "C": 'Moderate', "D": 'Negligible' },
    "right_answer": 'High',
        "id": 90
},
{
    "Question": 'Which of the following refers to creating products tailored to individual customers?',
        "Options": {
        "A": 'Customization',
            "B": 'Adaptation',
                "C": 'Direct material',
                    "D": 'Auction'
    },
    "right_answer": 'Customization',
        "id": 91
},
{
    "Question": 'Which form of e-marketplace brings together buyers and sellers from the same industry?',
        "Options": { "A": 'Horizontal', "B": 'Vertical', "C": 'Integrated', "D": 'Isolated' },
    "right_answer": 'Vertical',
        "id": 92
},
{
    "Question": 'Which of the following is done by Secure Sockets Layers?',
        "Options": {
        "A": 'creates a secure, private connection to a web server',
            "B": 'Encrypts information',
                "C": 'Sends information over the internet',
                    "D": 'All of the above'
    },
    "right_answer": 'All of the above',
        "id": 93
},
{
    "Question": 'The delay that occur during the playback of a stream is called ___________',
        "Options": {
        "A": 'Stream delay',
            "B": 'Playback delay',
                "C": 'Jitter',
                    "D": 'Event delay'
    },
    "right_answer": 'Jitter',
        "id": 94
},
{
    "Question": 'In teardown state of real time streaming protocol is ___________',
        "Options": {
        "A": 'the server resources for client',
            "B": 'server delivers the stream to client',
                "C": 'server suspends delivery of stream',
                    "D": 'server breaks down the connection'
    },
    "right_answer": 'server breaks down the connection',
        "id": 95
},
{
    "Question": 'In Real Time Interactive Audio Video, Jitter is introduced in real-time data by delay between____',
        "Options": { "A": 'pixels', "B": 'layers', "C": 'frames', "D": 'packets' },
    "right_answer": 'packets',
        "id": 96
},
{
    "Question": 'In Audio and Video Compression, voice is sampled at 8000 samples per second with_____________',
        "Options": {
        "A": '8 bits per sample',
            "B": '5 bits per sample',
                "C": '7 bits per sample',
                    "D": '6 bits per sample'
    },
    "right_answer": '8 bits per sample',
        "id": 97
},
{
    "Question": 'Audio compression can be used for____________',
        "Options": {
        "A": 'voice and data',
            "B": 'video and voice',
                "C": 'speech or music',
                    "D": 'picture and colors'
    },
    "right_answer": 'speech or music',
        "id": 98
},
{
    "Question": 'Each ___ represents a particular colour.',
        "Options": {
        "A": 'Frame',
            "B": 'Character',
                "C": 'Pixel value',
                    "D": 'None of the above'
    },
    "right_answer": 'Pixel value',
        "id": 99
},
{
    "Question": '___________ is basically a form of pictorial presentation.',
        "Options": { "A": 'Photography', "B": 'Animations', "C": 'Drawing', "D": 'Creativity' },
    "right_answer": 'Animations',
        "id": 100
}
]

export default questions;