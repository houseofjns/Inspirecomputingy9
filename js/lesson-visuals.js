/* Year 9 lesson visuals: original diagrams, sample datasets and code companions. */
window.HJS_LESSON_VISUALS = {
  "1": {
    "0": [
      {
        "type": "flow",
        "title": "Computational thinking process",
        "steps": [
          "Define the problem",
          "Decompose into tasks",
          "Abstract key information",
          "Write algorithm",
          "Test and refine"
        ],
        "note": "Abstraction removes irrelevant details; decomposition separates work into manageable parts."
      }
    ],
    "1": [
      {
        "type": "table",
        "title": "Bubble sort: one pass",
        "headers": [
          "Comparison",
          "Before",
          "After"
        ],
        "rows": [
          [
            "1st pair",
            "6, 3",
            "3, 6"
          ],
          [
            "2nd pair",
            "6, 4",
            "4, 6"
          ],
          [
            "3rd pair",
            "6, 1",
            "1, 6"
          ],
          [
            "4th pair",
            "6, 7",
            "6, 7"
          ]
        ],
        "note": "Illustrative trace: compare adjacent values from left to right. Repeat passes until no swap occurs."
      }
    ],
    "2": [
      {
        "type": "code",
        "title": "Python bubble sort example",
        "language": "Python",
        "source": "values = [6, 3, 4, 1, 7]\nfor pass_no in range(len(values) - 1):\n    swapped = False\n    for i in range(len(values) - 1 - pass_no):\n        if values[i] > values[i + 1]:\n            values[i], values[i + 1] = values[i + 1], values[i]\n            swapped = True\n    if not swapped:\n        break\nprint(values)",
        "output": "[1, 3, 4, 6, 7]",
        "note": "Additional practice code illustrating adjacent swaps and an early-stop flag."
      }
    ],
    "3": [
      {
        "type": "flow",
        "title": "Merge sort: divide and merge",
        "steps": [
          "Original list",
          "Split into halves",
          "Split to single values",
          "Compare sub-list fronts",
          "Merge in order",
          "One sorted list"
        ],
        "note": "The divide-and-conquer cycle continues until one ordered list remains."
      },
      {
        "type": "table",
        "title": "Example merge stages",
        "headers": [
          "Stage",
          "Left sub-list",
          "Right sub-list"
        ],
        "rows": [
          [
            "Split",
            "[5, 2]",
            "[8, 4]"
          ],
          [
            "Sort",
            "[2, 5]",
            "[4, 8]"
          ],
          [
            "Merge",
            "[2, 4, 5, 8]",
            "—"
          ]
        ],
        "note": "Illustrative data used to explain the merge step."
      }
    ],
    "4": [
      {
        "type": "flow",
        "title": "Linear search sequence",
        "steps": [
          "Start at first item",
          "Compare with target",
          "Match? output position",
          "No match: move next",
          "End reached? report not found"
        ],
        "note": "Linear search checks each value sequentially and can work on an unsorted list."
      },
      {
        "type": "code",
        "title": "Python linear search",
        "language": "Python",
        "source": "films = [\"Jungle\", \"River\", \"Orbit\", \"Cloud\"]\ntarget = \"Orbit\"\nfound_at = -1\nfor index, film in enumerate(films):\n    if film == target:\n        found_at = index\n        break\nprint(found_at)",
        "output": "2",
        "note": "Python list positions are zero-based in this example."
      }
    ],
    "5": [
      {
        "type": "table",
        "title": "Binary search: narrowing the list",
        "headers": [
          "Step",
          "Sorted values",
          "Middle",
          "Decision"
        ],
        "rows": [
          [
            "1",
            "2, 12, 22, 30, 35, 41, 47",
            "30",
            "47 is higher: keep right half"
          ],
          [
            "2",
            "35, 41, 47",
            "41",
            "47 is higher: keep right half"
          ],
          [
            "3",
            "47",
            "47",
            "Found"
          ]
        ],
        "note": "The list must be sorted before binary search. The values are illustrative and echo the workbook search sequence."
      }
    ],
    "6": [
      {
        "type": "table",
        "title": "Search and sort comparison",
        "headers": [
          "Method",
          "Must be sorted?",
          "Best use",
          "Main trade-off"
        ],
        "rows": [
          [
            "Bubble sort",
            "No",
            "Small lists / learning",
            "Many comparisons"
          ],
          [
            "Merge sort",
            "No",
            "Large lists",
            "Extra memory and complexity"
          ],
          [
            "Linear search",
            "No",
            "Unsorted or small data",
            "May scan all items"
          ],
          [
            "Binary search",
            "Yes",
            "Large sorted data",
            "Requires sorting first"
          ]
        ]
      }
    ],
    "7": [
      {
        "type": "table",
        "title": "Simple test plan",
        "headers": [
          "Test case",
          "Input",
          "Expected result"
        ],
        "rows": [
          [
            "Normal",
            "Sorted list [1, 3, 5]",
            "Search 3 returns position"
          ],
          [
            "Boundary",
            "First / last item",
            "Both are found"
          ],
          [
            "Not found",
            "Search 9",
            "Not-found message"
          ],
          [
            "Invalid",
            "Empty list",
            "Safe message; no crash"
          ]
        ],
        "note": "Example test data for a search program; adapt the expected output to the exact program."
      }
    ]
  },
  "2": {
    "0": [
      {
        "type": "graph",
        "title": "Sample waveform (illustrative)",
        "points": [
          [
            0,
            0
          ],
          [
            1,
            2
          ],
          [
            2,
            4
          ],
          [
            3,
            1
          ],
          [
            4,
            -2
          ],
          [
            5,
            -4
          ],
          [
            6,
            -1
          ],
          [
            7,
            2
          ],
          [
            8,
            3
          ],
          [
            9,
            0
          ]
        ],
        "xMax": 9,
        "yMax": 5,
        "xLabel": "Time (sample intervals)",
        "yLabel": "Amplitude",
        "note": "Illustrative sound wave. Time is shown on the horizontal axis and amplitude on the vertical axis."
      }
    ],
    "1": [
      {
        "type": "table",
        "title": "Uncompressed audio size formula",
        "headers": [
          "Factor",
          "Meaning",
          "Example"
        ],
        "rows": [
          [
            "Sample rate",
            "Samples each second",
            "44,100 samples/s"
          ],
          [
            "Bit depth",
            "Bits per sample",
            "16 bits"
          ],
          [
            "Channels",
            "Mono 1 / Stereo 2",
            "2 channels"
          ],
          [
            "Duration",
            "Recording length",
            "30 seconds"
          ],
          [
            "Formula",
            "Rate × depth × channels × seconds",
            "44,100 × 16 × 2 × 30 bits"
          ]
        ],
        "note": "Keep units in the working. Divide bits by 8 to convert to bytes."
      }
    ],
    "2": [
      {
        "type": "code",
        "title": "Audio size calculation",
        "language": "Python",
        "source": "sample_rate = 44100\nbit_depth = 16\nchannels = 2\nduration = 30\nsize_bits = sample_rate * bit_depth * channels * duration\nsize_bytes = size_bits / 8\nprint(size_bits, size_bytes)",
        "output": "42,336,000 bits  |  5,292,000 bytes",
        "note": "Additional practice calculation using the standard uncompressed audio formula."
      }
    ],
    "3": [
      {
        "type": "table",
        "title": "Storage media technologies",
        "headers": [
          "Type",
          "How it stores data",
          "Examples",
          "Typical property"
        ],
        "rows": [
          [
            "Magnetic",
            "Magnetic patterns",
            "HDD, tape",
            "High capacity / moving parts"
          ],
          [
            "Optical",
            "Laser reads disc marks",
            "CD, DVD, Blu-ray",
            "Removable / limited capacity"
          ],
          [
            "Solid-state",
            "Memory chips",
            "SSD, USB, microSD",
            "Fast / no moving parts"
          ]
        ]
      }
    ],
    "4": [
      {
        "type": "table",
        "title": "Compare storage characteristics",
        "headers": [
          "Factor",
          "HDD",
          "SSD / flash",
          "Optical disc"
        ],
        "rows": [
          [
            "Moving parts",
            "Usually yes",
            "No",
            "Drive has moving mechanism"
          ],
          [
            "Access speed",
            "Moderate",
            "Fast",
            "Usually slower"
          ],
          [
            "Portability",
            "Portable models exist",
            "Small and durable",
            "Easy to carry"
          ],
          [
            "Rewritable",
            "Yes",
            "Yes",
            "Depends on disc type"
          ]
        ]
      }
    ],
    "5": [
      {
        "type": "flow",
        "title": "Backup type selection",
        "steps": [
          "Choose important data",
          "Full backup: copy everything",
          "Differential: changes since full",
          "Incremental: changes since last backup",
          "Store a separate copy",
          "Test restoration"
        ],
        "note": "The key distinction is which previous backup is used as the reference for changed data."
      }
    ],
    "6": [
      {
        "type": "table",
        "title": "Organisation storage plan",
        "headers": [
          "User group",
          "Main storage",
          "Additional storage",
          "Reason"
        ],
        "rows": [
          [
            "Office employees",
            "Central magnetic storage",
            "USB / shared backup",
            "Capacity and shared files"
          ],
          [
            "Remote employees",
            "Laptop SSD",
            "Secure cloud storage",
            "Mobility and collaboration"
          ],
          [
            "Travelling staff",
            "Laptop SSD",
            "Portable SSD / flash",
            "Durable and quick access"
          ]
        ],
        "note": "Illustrative storage plan; choose according to real capacity, security and budget requirements."
      }
    ]
  },
  "3": {
    "0": [
      {
        "type": "flow",
        "title": "Input–process–output cycle",
        "steps": [
          "Input devices",
          "CPU processes instructions",
          "Temporary / permanent storage",
          "Output devices",
          "Feedback / next input"
        ],
        "note": "A touch screen can act as both an input and an output device."
      }
    ],
    "1": [
      {
        "type": "layers",
        "title": "Core computer components",
        "layers": [
          [
            "CPU",
            "Executes instructions and controls processing"
          ],
          [
            "RAM",
            "Holds active programs and data temporarily"
          ],
          [
            "Motherboard",
            "Connects system components"
          ],
          [
            "Storage",
            "Keeps files when power is off"
          ],
          [
            "PSU",
            "Supplies electrical power"
          ]
        ]
      }
    ],
    "2": [
      {
        "type": "table",
        "title": "Programming language levels",
        "headers": [
          "Language type",
          "Readability",
          "Translation",
          "Typical use"
        ],
        "rows": [
          [
            "High-level",
            "Closer to human language",
            "Compiler / interpreter",
            "Application development"
          ],
          [
            "Assembly",
            "Mnemonic instructions",
            "Assembler",
            "Low-level hardware control"
          ],
          [
            "Machine code",
            "Binary instructions",
            "Executed by CPU",
            "Processor instruction format"
          ]
        ]
      }
    ],
    "3": [
      {
        "type": "table",
        "title": "RISC and CISC overview",
        "headers": [
          "Feature",
          "RISC",
          "CISC"
        ],
        "rows": [
          [
            "Instruction set",
            "Smaller, simpler set",
            "Larger, more complex set"
          ],
          [
            "Instruction work",
            "Often simple operations",
            "May combine several operations"
          ],
          [
            "Design focus",
            "Efficient simple instructions",
            "Rich instruction set"
          ],
          [
            "Important note",
            "Actual speed depends on system design",
            "Actual speed depends on system design"
          ]
        ]
      }
    ],
    "4": [
      {
        "type": "flow",
        "title": "Start-up sequence",
        "steps": [
          "Power on",
          "Firmware / BIOS starts",
          "Initial hardware checks",
          "Select boot device",
          "Boot loader runs",
          "Operating system loads"
        ],
        "note": "Firmware instructions must be available before the main operating system is loaded."
      }
    ],
    "5": [
      {
        "type": "table",
        "title": "RAM compared with ROM",
        "headers": [
          "Feature",
          "RAM",
          "ROM / firmware"
        ],
        "rows": [
          [
            "Purpose",
            "Working memory",
            "Stored instructions / firmware"
          ],
          [
            "Volatility",
            "Volatile",
            "Non-volatile"
          ],
          [
            "Power off",
            "Contents normally lost",
            "Contents retained"
          ],
          [
            "Typical access",
            "Read and write during use",
            "Read; some firmware can be updated"
          ]
        ]
      }
    ],
    "6": [
      {
        "type": "flow",
        "title": "Virtual memory page movement",
        "steps": [
          "Application requests data",
          "Check physical RAM",
          "RAM available? use RAM",
          "RAM insufficient: move page to storage",
          "Page needed again: reload to RAM"
        ],
        "note": "Virtual memory provides capacity, but storage access is slower than physical RAM."
      }
    ],
    "7": [
      {
        "type": "table",
        "title": "User workload and memory needs",
        "headers": [
          "Workload",
          "Active memory demand",
          "Storage considerations"
        ],
        "rows": [
          [
            "Office documents",
            "Low / moderate",
            "Documents and backups"
          ],
          [
            "Many browser tabs",
            "Moderate / high",
            "Cache and downloads"
          ],
          [
            "Video editing",
            "High",
            "Large media files and fast SSD"
          ],
          [
            "3D modelling",
            "High",
            "Large project files and scratch space"
          ]
        ],
        "note": "Illustrative comparison. Actual requirements depend on application versions and project size."
      }
    ]
  },
  "4": {
    "0": [
      {
        "type": "table",
        "title": "Network types and coverage",
        "headers": [
          "Type",
          "Coverage",
          "Example"
        ],
        "rows": [
          [
            "LAN",
            "Local building or site",
            "School computer room"
          ],
          [
            "WAN",
            "Large geographical area",
            "Branches in different cities"
          ],
          [
            "Internet",
            "Global network of networks",
            "Public websites and services"
          ],
          [
            "Wired",
            "Cable connection",
            "Ethernet"
          ],
          [
            "Wireless",
            "Radio connection",
            "Wi-Fi"
          ]
        ]
      }
    ],
    "1": [
      {
        "type": "flow",
        "title": "Network topology comparison",
        "steps": [
          "Star: all devices connect centrally",
          "Bus: devices share a backbone",
          "Ring: devices form a loop",
          "Mesh: multiple paths connect nodes"
        ],
        "note": "A visual topology diagram should show which connections depend on a central device or shared cable."
      }
    ],
    "2": [
      {
        "type": "table",
        "title": "Benefits and risks of networks",
        "headers": [
          "Benefit",
          "Risk / challenge",
          "Possible control"
        ],
        "rows": [
          [
            "Shared files and printers",
            "Unauthorised access",
            "Accounts and permissions"
          ],
          [
            "Central backup",
            "Single service outage",
            "Redundancy and recovery"
          ],
          [
            "Collaboration",
            "Congestion",
            "Capacity planning"
          ],
          [
            "Communication",
            "Malware spreading",
            "Updates and endpoint protection"
          ]
        ]
      }
    ],
    "3": [
      {
        "type": "table",
        "title": "School network scenario",
        "headers": [
          "Requirement",
          "Possible design choice",
          "Reason"
        ],
        "rows": [
          [
            "Fixed desktops",
            "Wired Ethernet / star",
            "Stable connection"
          ],
          [
            "Tablets",
            "Wi-Fi access points",
            "Mobility"
          ],
          [
            "Visitors",
            "Guest network",
            "Separate access"
          ],
          [
            "Staff files",
            "Central storage and permissions",
            "Controlled sharing"
          ]
        ]
      }
    ],
    "4": [
      {
        "type": "table",
        "title": "Open source vs proprietary",
        "headers": [
          "Feature",
          "Open-source",
          "Proprietary"
        ],
        "rows": [
          [
            "Source code",
            "Available under licence terms",
            "Usually controlled by owner"
          ],
          [
            "Modification",
            "Allowed by some licences",
            "Usually restricted"
          ],
          [
            "Support",
            "Community or paid providers",
            "Vendor support may be available"
          ],
          [
            "Cost",
            "May be free to obtain",
            "May require purchase / subscription"
          ]
        ]
      }
    ],
    "5": [
      {
        "type": "table",
        "title": "Software licence overview",
        "headers": [
          "Licence type",
          "Typical permission",
          "Check before use"
        ],
        "rows": [
          [
            "Commercial",
            "Use under paid terms",
            "User/device limits"
          ],
          [
            "Freeware",
            "No purchase price",
            "Copying and modification terms"
          ],
          [
            "Shareware / trial",
            "Try before purchase",
            "Time or feature limits"
          ],
          [
            "Open-source",
            "Rights set by licence",
            "Conditions for redistribution"
          ]
        ]
      }
    ],
    "6": [
      {
        "type": "flow",
        "title": "Remote-working setup",
        "steps": [
          "Managed device",
          "Secure authentication",
          "Trusted network connection",
          "Collaboration and shared files",
          "Backup and support"
        ],
        "note": "Remote-work policies should cover device security, access and communication."
      }
    ],
    "7": [
      {
        "type": "table",
        "title": "Ethical content use checklist",
        "headers": [
          "Question",
          "Why it matters"
        ],
        "rows": [
          [
            "Who created it?",
            "Acknowledge the creator"
          ],
          [
            "What licence applies?",
            "Respect use conditions"
          ],
          [
            "Is permission needed?",
            "Avoid unauthorised sharing"
          ],
          [
            "Does it include personal data?",
            "Protect privacy and consent"
          ]
        ]
      }
    ],
    "8": [
      {
        "type": "flow",
        "title": "Responding to a suspected phishing message",
        "steps": [
          "Pause before clicking",
          "Check sender and address",
          "Inspect links and attachments",
          "Do not enter credentials",
          "Report using approved process",
          "Change credentials if compromised"
        ],
        "note": "Never reply with sensitive information or forward suspicious attachments."
      }
    ],
    "9": [
      {
        "type": "graph",
        "title": "Digital access examples (illustrative)",
        "bar": true,
        "points": [
          [
            0,
            85
          ],
          [
            1,
            62
          ],
          [
            2,
            38
          ],
          [
            3,
            24
          ]
        ],
        "categories": [
          "Urban",
          "Town",
          "Rural",
          "Remote"
        ],
        "xLabel": "Example community",
        "yLabel": "Access index",
        "note": "Illustrative values only - not source statistics. The chart demonstrates how an access gap could be displayed."
      }
    ]
  },
  "5": {
    "0": [
      {
        "type": "table",
        "title": "Database data types",
        "headers": [
          "Data type",
          "Stores",
          "Example"
        ],
        "rows": [
          [
            "Text",
            "Names and words",
            "StudentName"
          ],
          [
            "Integer",
            "Whole numbers",
            "Quantity = 12"
          ],
          [
            "Real / decimal",
            "Fractional values",
            "Price = 12.50"
          ],
          [
            "Date",
            "Calendar dates",
            "2026-11-22"
          ],
          [
            "Boolean",
            "True or false",
            "Paid = True"
          ]
        ]
      }
    ],
    "1": [
      {
        "type": "flow",
        "title": "Database design process",
        "steps": [
          "Identify purpose and users",
          "Identify entities and fields",
          "Choose data types",
          "Set primary keys",
          "Define relationships",
          "Add validation rules",
          "Test sample records"
        ],
        "note": "Plan the data structure before entering a large amount of information."
      }
    ],
    "2": [
      {
        "type": "code",
        "title": "Simple HTML-style form logic (illustrative)",
        "language": "FORM DESIGN",
        "source": "Student ID: [required text]\nFull name:  [required text]\nClass:      [drop-down list]\nDate of birth: [date picker]\nSubmit: [Save record]",
        "output": "Validation checks required fields and data types before saving.",
        "note": "A database form is a data-entry interface, not the database table itself."
      }
    ],
    "3": [
      {
        "type": "table",
        "title": "Data validation examples",
        "headers": [
          "Field",
          "Rule",
          "Example valid value"
        ],
        "rows": [
          [
            "StudentID",
            "Unique and required",
            "S1048"
          ],
          [
            "Age",
            "Integer in an allowed range",
            "14"
          ],
          [
            "DateOfBirth",
            "Valid date",
            "2012-04-15"
          ],
          [
            "Email",
            "Valid format",
            "name@example.com"
          ],
          [
            "Class",
            "Value from a list",
            "9B"
          ]
        ]
      },
      {
        "type": "flow",
        "title": "Report preparation",
        "steps": [
          "Check source records",
          "Choose fields",
          "Apply query / filter",
          "Group and sort",
          "Calculate totals",
          "Preview and export report"
        ]
      }
    ],
    "4": [
      {
        "type": "layers",
        "title": "Relational database link",
        "layers": [
          [
            "Customers table",
            "Primary key: CustomerID"
          ],
          [
            "Relationship",
            "One customer can have many orders"
          ],
          [
            "Orders table",
            "Foreign key: CustomerID"
          ],
          [
            "Order items",
            "Linked by OrderID"
          ]
        ]
      }
    ],
    "5": [
      {
        "type": "code",
        "title": "SQL query pattern",
        "language": "SQL",
        "source": "SELECT ProductName, Price\nFROM Products\nWHERE Category = \"Audio\"\n  AND Price < 100\nORDER BY Price ASC;",
        "output": "Returns Audio products under 100, cheapest first.",
        "note": "The data and field names are illustrative. Match SQL criteria to the exact database schema."
      }
    ],
    "6": [
      {
        "type": "table",
        "title": "Common report calculations",
        "headers": [
          "Function",
          "Purpose",
          "Example"
        ],
        "rows": [
          [
            "SUM",
            "Add numeric values",
            "SUM(Amount)"
          ],
          [
            "COUNT",
            "Count records",
            "COUNT(StudentID)"
          ],
          [
            "AVG",
            "Calculate average",
            "AVG(Score)"
          ],
          [
            "MIN",
            "Find smallest value",
            "MIN(Price)"
          ],
          [
            "MAX",
            "Find largest value",
            "MAX(Price)"
          ]
        ]
      }
    ],
    "7": [
      {
        "type": "flow",
        "title": "Database problem-solving cycle",
        "steps": [
          "Understand the question",
          "Identify tables and fields",
          "Define criteria",
          "Build a query",
          "Check returned records",
          "Create the report",
          "Verify totals and labels"
        ],
        "note": "Test with a few known records before trusting a report built from the whole database."
      }
    ]
  },
  "6": {
    "0": [
      {
        "type": "code",
        "title": "Minimal HTML document",
        "language": "HTML",
        "source": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>My first page</title>\n</head>\n<body>\n  <h1>Welcome</h1>\n  <p>This is my first page.</p>\n</body>\n</html>",
        "note": "HTML defines structure and meaning; CSS controls presentation."
      }
    ],
    "1": [
      {
        "type": "table",
        "title": "Common HTML elements",
        "headers": [
          "Element",
          "Purpose",
          "Example"
        ],
        "rows": [
          [
            "h1–h6",
            "Headings",
            "<h1>Title</h1>"
          ],
          [
            "p",
            "Paragraph",
            "<p>Hello</p>"
          ],
          [
            "a",
            "Link",
            "<a href=\"about.html\">About</a>"
          ],
          [
            "img",
            "Image",
            "<img src=\"x.jpg\" alt=\"…\">"
          ],
          [
            "ul / li",
            "List",
            "<ul><li>Item</li></ul>"
          ]
        ]
      }
    ],
    "2": [
      {
        "type": "layers",
        "title": "Simple page layout",
        "layers": [
          [
            "Header",
            "Site identity and page title"
          ],
          [
            "Navigation",
            "Links to main sections"
          ],
          [
            "Main content",
            "Primary information"
          ],
          [
            "Aside / sidebar",
            "Related information"
          ],
          [
            "Footer",
            "Contact and copyright details"
          ]
        ]
      }
    ],
    "3": [
      {
        "type": "table",
        "title": "Web page test checklist",
        "headers": [
          "Feature",
          "Test",
          "Expected result"
        ],
        "rows": [
          [
            "Navigation",
            "Click every link",
            "Correct page opens"
          ],
          [
            "Images",
            "Check every media path",
            "Image loads with alt text"
          ],
          [
            "Layout",
            "Resize browser",
            "Content remains readable"
          ],
          [
            "Keyboard",
            "Tab through controls",
            "Focus is visible"
          ],
          [
            "Content",
            "Check spelling and headings",
            "Consistent and accurate"
          ]
        ]
      }
    ],
    "4": [
      {
        "type": "table",
        "title": "WYSIWYG vs code editor",
        "headers": [
          "Feature",
          "WYSIWYG",
          "Code editor"
        ],
        "rows": [
          [
            "Editing",
            "Visual canvas",
            "HTML/CSS text"
          ],
          [
            "Learning",
            "Easy to begin",
            "Teaches structure directly"
          ],
          [
            "Control",
            "Depends on tool",
            "Direct code control"
          ],
          [
            "Code output",
            "May be verbose",
            "Can be optimised by author"
          ]
        ]
      }
    ],
    "5": [
      {
        "type": "code",
        "title": "Multimedia HTML examples",
        "language": "HTML",
        "source": "<img src=\"campus.jpg\" alt=\"Training centre classroom\">\n<audio controls src=\"welcome.mp3\">\n  Audio is not supported.\n</audio>\n<video controls width=\"480\" poster=\"cover.jpg\">\n  <source src=\"tour.mp4\" type=\"video/mp4\">\n  Your browser does not support video.\n</video>",
        "note": "Use media only with permission, add alternatives and test loading on target devices."
      }
    ],
    "6": [
      {
        "type": "flow",
        "title": "Multi-page website sitemap",
        "steps": [
          "Home",
          "Courses",
          "Student resources",
          "About us",
          "Contact"
        ],
        "note": "A sitemap is a planning diagram. Shared navigation should make it possible to move between these pages."
      }
    ],
    "7": [
      {
        "type": "code",
        "title": "Relative links between pages",
        "language": "HTML",
        "source": "<nav>\n  <a href=\"index.html\">Home</a>\n  <a href=\"courses.html\">Courses</a>\n  <a href=\"about.html\">About</a>\n  <a href=\"contact.html\">Contact</a>\n</nav>\n<link rel=\"stylesheet\" href=\"css/style.css\">",
        "note": "Use relative paths consistently and verify every linked page and asset after moving folders."
      }
    ]
  }
};
