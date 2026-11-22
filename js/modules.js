/* House of J&S · Year 9 source-aligned bilingual curriculum. Myanmar explanations are original companion teaching notes. */
window.HJS_UNITS = [
  {
    "id": 1,
    "title": "Search and sort algorithms",
    "myTitle": "Search နှင့် Sort Algorithm များ",
    "range": "Student Book pp. 2–26",
    "accent": "blue",
    "overview": "This unit develops computational thinking, abstraction and decomposition, sorting and searching methods, Python and pseudocode implementations, algorithm comparison, and error checking and testing. The sequence follows the Student Book: bubble sort, merge sort, linear search, binary search, algorithm choice, and debugging.",
    "overviewMy": "ဤယူနစ်တွင် Computational thinking၊ Abstraction၊ Decomposition၊ Sorting နှင့် Searching နည်းလမ်းများ၊ Pseudocode/Python implementation၊ Algorithm နှိုင်းယှဉ်ခြင်း၊ Error checking နှင့် Testing တို့ကို မူရင်းစာအုပ်အစီအစဉ်အတိုင်း လေ့လာမည်။",
    "objectives": [
      [
        "Explain algorithmic and computational thinking, including abstraction and decomposition.",
        "Algorithmic thinking၊ Computational thinking၊ Abstraction နှင့် Decomposition တို့ကို ရှင်းပြနိုင်ရန်။"
      ],
      [
        "Describe and trace bubble sort and merge sort.",
        "Bubble sort နှင့် Merge sort လုပ်ဆောင်ပုံကို အဆင့်လိုက်ဖော်ပြနိုင်ရန်။"
      ],
      [
        "Compare linear and binary search and choose a suitable method.",
        "Linear search နှင့် Binary search ကို နှိုင်းယှဉ်ပြီး သင့်တော်သောနည်းလမ်း ရွေးနိုင်ရန်။"
      ],
      [
        "Write simple searching and sorting logic using pseudocode and Python.",
        "Pseudocode နှင့် Python ဖြင့် ရိုးရှင်းသော Search/Sort logic ရေးနိုင်ရန်။"
      ],
      [
        "Identify syntax and logic errors and plan appropriate tests.",
        "Syntax error၊ Logic error များကို ခွဲခြားပြီး သင့်လျော်သော Test များ စီစဉ်နိုင်ရန်။"
      ]
    ],
    "lessons": [
      [
        "Algorithms and computational thinking",
        "An algorithm is a precise, ordered set of instructions that solves a problem or completes a task. Computational thinking is a way of approaching problems using ideas such as decomposition and abstraction. Decomposition breaks a large problem into smaller tasks that can be designed and tested separately. Abstraction removes information that is not needed for the current solution. For a journey planner, the destination, departure time and route are relevant; the colour of buildings beside the road may not be. A good algorithm has a clear start, a logical sequence, any required decisions or repetition, and a defined finish.",
        "Algorithm ဆိုသည်မှာ ပြဿနာတစ်ခုကို ဖြေရှင်းရန် သို့မဟုတ် အလုပ်တစ်ခု ပြီးမြောက်ရန် တိကျပြီး အစီအစဉ်တကျ ရေးထားသော ညွှန်ကြားချက်များဖြစ်သည်။ Computational thinking တွင် ပြဿနာကြီးကို အပိုင်းငယ်များခွဲသည့် Decomposition နှင့် မလိုအပ်သော အချက်အလက်များကို ဖယ်ရှားသည့် Abstraction ပါဝင်သည်။ Route planner တစ်ခုတွင် သွားမည့်နေရာ၊ ထွက်ခွာချိန်နှင့် လမ်းကြောင်းတို့က အရေးကြီးပြီး လမ်းဘေးအဆောက်အအုံအရောင်က မလိုအပ်နိုင်ပါ။",
        "Define the problem, identify essential inputs and outputs, decompose the task, remove irrelevant details, then write and test the steps in order.",
        "ပြဿနာကို သတ်မှတ်ပါ။ လိုအပ်သော Input/Output ကို ရွေးပါ။ Task ကို အပိုင်းငယ်ခွဲပါ။ မသက်ဆိုင်သော အချက်အလက်ဖယ်ရှားပြီး Step များကို အစီအစဉ်တကျ ရေး၍ စမ်းသပ်ပါ။"
      ],
      [
        "Sorting algorithms",
        "A sorting algorithm arranges data into a useful order, such as ascending (lowest to highest) or descending (highest to lowest). Sorting makes large collections easier to search, compare and interpret. Bubble sort repeatedly compares neighbouring values and swaps them when they are in the wrong order. A pass moves through the list; further passes are needed until a complete pass makes no swaps. A short list is useful for tracing by hand. Sorting is used in music libraries, online shops, address books and score tables.",
        "Sorting algorithm သည် Data များကို Ascending (အငယ်မှအကြီး) သို့မဟုတ် Descending (အကြီးမှအငယ်) စီစဉ်ပေးသည်။ Bubble sort သည် ဘေးချင်းကပ် Value နှစ်ခုကို နှိုင်းယှဉ်ပြီး အစီအစဉ်မမှန်လျှင် လဲလှယ်သည်။ List တစ်ခုလုံးကို တစ်ကြိမ်ဖြတ်သန်းခြင်းကို Pass ဟုခေါ်ပြီး လဲလှယ်မှုမရှိသည့် Pass တစ်ကြိမ်ရသည်အထိ ထပ်လုပ်ရသည်။",
        "Write the list, compare each adjacent pair from left to right, swap out-of-order values, record the pass, and repeat until no swap occurs.",
        "List ကိုရေးပါ။ ဘယ်မှညာသို့ ဘေးချင်းကပ် Value များကို နှိုင်းယှဉ်ပါ။ မမှန်လျှင် လဲပါ။ Pass ကို မှတ်ပြီး လဲစရာမရှိတော့သည့်အထိ ထပ်လုပ်ပါ။"
      ],
      [
        "Creating a bubble sort program",
        "Bubble sort can be expressed in pseudocode and then translated into Python. A nested loop compares each item with the next item. If the left value is greater than the right value, a temporary variable is used to swap them. A change flag can record whether a pass made any swap; if not, the algorithm can stop early. The list length determines how many comparisons may be needed. Python comments begin with # and explain the programmer’s intention without being executed.",
        "Bubble sort ကို Pseudocode ဖြင့် ရေးပြီး Python သို့ ပြောင်းနိုင်သည်။ Loop အတွင်းရှိ Loop က Value တစ်ခုနှင့် နောက် Value ကို နှိုင်းယှဉ်သည်။ ဘယ်ဘက် Value ပိုကြီးလျှင် Temporary variable သုံး၍ လဲသည်။ Pass တစ်ခုတွင် လဲလှယ်မှုရှိ/မရှိကို Flag ဖြင့် မှတ်နိုင်သည်။ Python တွင် # ဖြင့် စသော Comment သည် Programmer အတွက် မှတ်ချက်ဖြစ်ပြီး Program က မလုပ်ဆောင်ပါ။",
        "Create a list, repeat a pass, compare adjacent positions, swap using a temporary variable, and test the final list with already-sorted and reverse-sorted data.",
        "List ဖန်တီးပါ။ Pass တစ်ခုကို ထပ်လုပ်ပါ။ ဘေးချင်းကပ် Value များကို နှိုင်းယှဉ်ပါ။ Temporary variable ဖြင့် လဲပါ။ Sorted နှင့် Reverse-sorted Data များဖြင့် စမ်းသပ်ပါ။"
      ],
      [
        "Creating a merge sort program",
        "Merge sort uses a divide-and-conquer approach. It repeatedly divides a list into smaller sub-lists until each sub-list contains one value. Single values are already sorted. The algorithm then compares the first available item in each sub-list and merges the values into a new list in order. Splitting and merging continues until one fully sorted list remains. Merge sort is generally more suitable than bubble sort for large data sets, although it is more complex and uses additional memory for sub-lists.",
        "Merge sort သည် Divide-and-conquer နည်းလမ်းကို သုံးသည်။ List ကို Value တစ်ခုစီသာ ကျန်သည်အထိ အပိုင်းငယ်များအဖြစ် ထပ်ခွဲသည်။ Value တစ်ခုတည်းရှိသော Sub-list သည် စီပြီးသားဖြစ်သည်။ ထို့နောက် Sub-list များ၏ ပထမ Value များကို နှိုင်းယှဉ်ပြီး အစီအစဉ်မှန်အတိုင်း List အသစ်ထဲ ပေါင်းစည်းသည်။ Data အများကြီးအတွက် Bubble sort ထက် ထိရောက်နိုင်သော်လည်း အဆင့်ပိုရှုပ်ပြီး Memory ထပ်လိုနိုင်သည်။",
        "Split the list in half recursively, sort the small sub-lists, then merge them by repeatedly taking the smallest front value.",
        "List ကို တစ်ဝက်စီ ခွဲပါ။ Sub-list များကို စီပါ။ အရှေ့ဆုံး Value များထဲမှ အငယ်ဆုံးကို အစဉ်လိုက် ထုတ်ပြီး ပြန်ပေါင်းပါ။"
      ],
      [
        "Linear search algorithms",
        "A linear search, also called a serial search, checks values one by one from the beginning of a list until a match is found or the end is reached. It works on sorted or unsorted data and is straightforward to implement. Its disadvantage is that a large list may require many comparisons. Pseudocode commonly uses a counter, a loop condition, an IF comparison and an output statement. A search should also define what happens when the item is not found.",
        "Linear search (Serial search) သည် List အစမှစ၍ Value တစ်ခုချင်းစီကို စစ်ဆေးပြီး ကိုက်ညီသည့်အရာတွေ့လျှင် ရပ်သည်။ မတွေ့ပါက List အဆုံးအထိ သွားသည်။ Sorted သို့မဟုတ် Unsorted Data နှစ်မျိုးစလုံးတွင် အသုံးပြုနိုင်ပြီး ရေးရလွယ်သော်လည်း Data အများကြီးဖြစ်လျှင် Comparison များနိုင်သည်။ မတွေ့သည့်အခါ ဘာလုပ်မည်ကိုလည်း သတ်မှတ်ရသည်။",
        "Set the counter to the first position, compare the current item with the search value, output a match or increment the counter, then handle the not-found case.",
        "Counter ကို ပထမနေရာထားပါ။ လက်ရှိ Item နှင့် Search value ကို နှိုင်းယှဉ်ပါ။ ကိုက်ညီလျှင် Output ထုတ်ပါ၊ မကိုက်လျှင် Counter တိုးပါ။ မတွေ့သည့်အခြေအနေကို ကိုင်တွယ်ပါ။"
      ],
      [
        "Binary search algorithms",
        "Binary search repeatedly halves a sorted list. It compares the target with the median (middle) item. If the target is lower, the upper half is discarded; if it is higher, the lower half is discarded. The search repeats on the remaining half until the item is found or no values remain. The list must be sorted first. An index position identifies an item’s location in the sequence. The method is efficient on large sorted lists because each comparison removes about half of the remaining candidates.",
        "Binary search သည် Sorted list ကို တစ်ဝက်စီ လျှော့ချရှာဖွေသည်။ ရှာလိုသော Value ကို အလယ် Value (Median) နှင့် နှိုင်းယှဉ်သည်။ Target ပိုငယ်လျှင် ညာဘက်တစ်ဝက်ကို ဖယ်ရှားပြီး ပိုကြီးလျှင် ဘယ်ဘက်တစ်ဝက်ကို ဖယ်ရှားသည်။ Value တွေ့သည် သို့မဟုတ် ရှာစရာမကျန်သည်အထိ ဆက်လုပ်သည်။ Binary search မလုပ်မီ List ကို စီထားရမည်။",
        "Sort the list, set lower and upper bounds, calculate the midpoint, compare it to the target, update one bound, and repeat.",
        "List ကို အရင် Sort လုပ်ပါ။ Lower/Upper bound သတ်မှတ်ပါ။ Midpoint တွက်ပါ။ Target နှင့် နှိုင်းယှဉ်ပြီး Bound တစ်ဖက်ကို ပြောင်းကာ ထပ်လုပ်ပါ။"
      ],
      [
        "Comparing algorithms",
        "Algorithm choice depends on data size, whether the list is already sorted, available memory, programming complexity and expected speed. Bubble sort is simple but involves many repeated comparisons and swaps. Merge sort is more efficient for large lists but is more complex and uses temporary sub-lists. Linear search works with unsorted data but may examine every value. Binary search is efficient but requires sorted data. Brute force means trying possibilities systematically without using a more efficient shortcut.",
        "Algorithm ရွေးချယ်ရာတွင် Data အရွယ်အစား၊ List ကို စီပြီးသား ဟုတ်/မဟုတ်၊ Memory၊ Program ရေးရခက်မှုနှင့် Speed တို့ကို စဉ်းစားရသည်။ Bubble sort သည် ရိုးရှင်းသော်လည်း Comparison/Swap များနိုင်သည်။ Merge sort သည် Data အများကြီးအတွက် ထိရောက်သော်လည်း ပိုရှုပ်ထွေးပြီး Sub-list Memory လိုသည်။ Binary search သည် ထိရောက်သော်လည်း Sorted data လိုသည်။",
        "Compare the input conditions, number of repeated operations, memory use and implementation complexity before recommending an algorithm.",
        "Input အခြေအနေ၊ ထပ်လုပ်ရသော Operation အရေအတွက်၊ Memory အသုံးပြုမှုနှင့် ရေးသားရခက်မှုတို့ကို နှိုင်းယှဉ်ပြီး Algorithm တစ်ခု ရွေးပါ။"
      ],
      [
        "Error checking and testing",
        "A syntax error breaks the rules of the programming language and may stop a program from running. A logic error allows the program to run but produces an incorrect result. Typical faults include misspelled commands, wrong symbols, incorrect indentation, inconsistent variable names and incorrect conditions. A test plan records the feature, test data, expected result, actual result and action required. Testing should include normal, boundary and invalid data where relevant.",
        "Syntax error သည် Programming language စည်းမျဉ်းကို ချိုးဖောက်သဖြင့် Program မလည်ပတ်နိုင်စေနိုင်သည်။ Logic error သည် Program လည်ပတ်သော်လည်း ရလဒ်မှားစေသည်။ Command စာလုံးပေါင်းမှားခြင်း၊ Symbol မှားခြင်း၊ Indentation မမှန်ခြင်း၊ Variable အမည်မတူခြင်းနှင့် Condition မှားခြင်းတို့ ဖြစ်နိုင်သည်။ Test plan တွင် Test data၊ Expected result၊ Actual result နှင့် လုပ်ဆောင်ရန်တို့ကို မှတ်တမ်းတင်ရသည်။",
        "Run a test case, compare actual and expected results, isolate the cause, correct the code, and rerun regression tests.",
        "Test case ကို Run လုပ်ပါ။ Actual နှင့် Expected result နှိုင်းယှဉ်ပါ။ အမှားအကြောင်းရင်းရှာပါ။ Code ပြင်ပြီး Regression test ပြန်လုပ်ပါ။"
      ]
    ],
    "terms": [
      [
        "Algorithm",
        "A finite, ordered set of instructions for solving a problem.",
        "ပြဿနာဖြေရှင်းရန် အစဉ်လိုက် ညွှန်ကြားချက်များ။"
      ],
      [
        "Computational thinking",
        "A problem-solving approach using decomposition and abstraction.",
        "Decomposition နှင့် Abstraction ကို သုံးသော ပြဿနာဖြေရှင်းနည်း။"
      ],
      [
        "Decomposition",
        "Breaking a large problem into smaller manageable parts.",
        "ပြဿနာကြီးကို အပိုင်းငယ်များအဖြစ် ခွဲခြင်း။"
      ],
      [
        "Abstraction",
        "Removing irrelevant detail and focusing on what matters.",
        "မလိုအပ်သော အသေးစိတ်များကို ဖယ်ရှားခြင်း။"
      ],
      [
        "Sorting algorithm",
        "A method for arranging data into a chosen order.",
        "Data ကို သတ်မှတ်ထားသော အစီအစဉ်အတိုင်း စီပေးသော နည်းလမ်း။"
      ],
      [
        "Ascending order",
        "Ordering from the lowest value to the highest.",
        "တန်ဖိုးအငယ်မှ အကြီးသို့ စီခြင်း။"
      ],
      [
        "Descending order",
        "Ordering from the highest value to the lowest.",
        "တန်ဖိုးအကြီးမှ အငယ်သို့ စီခြင်း။"
      ],
      [
        "Bubble sort",
        "A sort that compares adjacent values and swaps them when needed.",
        "ဘေးချင်းကပ် Value များကို နှိုင်းယှဉ်လဲလှယ်သော Sort။"
      ],
      [
        "Pass",
        "One complete traversal through a list during a sort.",
        "Sort လုပ်စဉ် List တစ်ခုလုံးကို တစ်ကြိမ်ဖြတ်သန်းခြင်း။"
      ],
      [
        "Swap",
        "Exchange the positions of two values.",
        "Value နှစ်ခု၏ နေရာကို လဲလှယ်ခြင်း။"
      ],
      [
        "Pseudocode",
        "A structured, language-independent description of an algorithm.",
        "Programming language မရွေးသည့် Algorithm ရေးသားပုံ။"
      ],
      [
        "Subprogram",
        "A reusable block of code.",
        "ပြန်လည်အသုံးပြုနိုင်သော Code အပိုင်း။"
      ],
      [
        "Merge sort",
        "A divide-and-conquer sort that splits and merges sub-lists.",
        "Sub-list ခွဲ၍ ပြန်ပေါင်းသော Divide-and-conquer Sort။"
      ],
      [
        "Divide and conquer",
        "Solving a problem by splitting it into smaller problems.",
        "ပြဿနာကို အပိုင်းငယ်များခွဲ၍ ဖြေရှင်းခြင်း။"
      ],
      [
        "Linear search",
        "A sequential search checking items one by one.",
        "Item များကို တစ်ခုချင်း ဆက်တိုက်စစ်သော Search။"
      ],
      [
        "Serial search",
        "Another name for linear search.",
        "Linear search ၏ အခြားအမည်။"
      ],
      [
        "Binary search",
        "A search that repeatedly halves a sorted list.",
        "Sorted list ကို တစ်ဝက်စီ လျှော့ချရှာသော နည်းလမ်း။"
      ],
      [
        "Median",
        "The middle value in an ordered list.",
        "အစီအစဉ်တကျရှိသော List ၏ အလယ် Value။"
      ],
      [
        "Index position",
        "The location number of an item in a sequence.",
        "Sequence အတွင်း Item ၏ တည်နေရာနံပါတ်။"
      ],
      [
        "Brute force",
        "Trying possibilities directly rather than applying a shortcut.",
        "Shortcut မသုံးဘဲ ဖြစ်နိုင်ခြေများကို တိုက်ရိုက်စမ်းခြင်း။"
      ],
      [
        "Syntax error",
        "A fault that breaks language rules.",
        "Programming language စည်းမျဉ်းချိုးဖောက်သည့် အမှား။"
      ],
      [
        "Logic error",
        "A fault in the design that produces an incorrect result.",
        "Program လည်ပတ်သော်လည်း ရလဒ်မှားစေသော အမှား။"
      ],
      [
        "Test plan",
        "A record of test inputs, expected and actual results and actions.",
        "Test input၊ Expected/Actual result နှင့် လုပ်ဆောင်ချက်မှတ်တမ်း။"
      ],
      [
        "Test data",
        "Values used to check a program.",
        "Program စမ်းသပ်ရန် အသုံးပြုသော Value များ။"
      ],
      [
        "Expected output",
        "The result a test should produce.",
        "Test မှ ရသင့်သော ရလဒ်။"
      ],
      [
        "Actual output",
        "The result the program really produces.",
        "Program မှ တကယ်ထွက်လာသော ရလဒ်။"
      ],
      [
        "Variable",
        "A named location used to store a value.",
        "တန်ဖိုးသိမ်းဆည်းရန် အမည်ပေးထားသော နေရာ။"
      ],
      [
        "Loop",
        "A structure that repeats instructions.",
        "Instruction များကို ထပ်လုပ်သော ဖွဲ့စည်းပုံ။"
      ],
      [
        "Condition",
        "A test that evaluates to true or false.",
        "True သို့မဟုတ် False ဖြစ်နိုင်သော စစ်ဆေးချက်။"
      ],
      [
        "Temporary variable",
        "A variable used briefly while swapping values.",
        "Value လဲရာတွင် ယာယီအသုံးပြုသော Variable။"
      ],
      [
        "Efficiency",
        "How effectively an algorithm uses time and memory.",
        "Algorithm က အချိန်နှင့် Memory ကို ထိရောက်စွာ သုံးနိုင်မှု။"
      ],
      [
        "Data set",
        "A collection of data values.",
        "Data Value များစုစည်းထားခြင်း။"
      ],
      [
        "Debugging",
        "Finding and correcting faults in a program.",
        "Program အမှားများ ရှာဖွေပြင်ဆင်ခြင်း။"
      ],
      [
        "Boundary test",
        "A test using values at the edge of an allowed range.",
        "ခွင့်ပြုထားသော Range အစွန်းတန်ဖိုးများကို စမ်းသပ်ခြင်း။"
      ]
    ],
    "examples": [
      "A route planner removes unneeded street details but keeps turns and destinations.",
      "A music app sorts tracks by artist or title before searching.",
      "A small list can use linear search; a large sorted catalogue can use binary search."
    ],
    "examplesMy": [
      "လမ်းကြောင်းစီစဉ်ရာတွင် မလိုသောအချက်များ ဖယ်ရှားပြီး လမ်းကွေ့နှင့် Destination ကို ထိန်းထားသည်။",
      "Music app တစ်ခုသည် သီချင်းများကို Artist သို့မဟုတ် Title အလိုက် စီနိုင်သည်။",
      "List သေးလျှင် Linear search၊ Sorted catalogue ကြီးလျှင် Binary search သင့်တော်နိုင်သည်။"
    ],
    "table": {
      "caption": "Searching and sorting algorithm comparison",
      "headers": [
        "Algorithm",
        "Requirement",
        "Strength",
        "Limitation"
      ],
      "rows": [
        [
          "Bubble sort",
          "No pre-sort required",
          "Simple to trace and code",
          "Many comparisons and swaps"
        ],
        [
          "Merge sort",
          "Data can be split into sub-lists",
          "Efficient for large data",
          "More complex; extra memory"
        ],
        [
          "Linear search",
          "Sorted or unsorted list",
          "Simple; works with any order",
          "May inspect every item"
        ],
        [
          "Binary search",
          "List must be sorted",
          "Very efficient on large lists",
          "Requires sorted input"
        ]
      ]
    },
    "activities": [
      [
        "Trace bubble sort",
        "Trace the passes for [6, 3, 4, 1, 7]. Record each comparison and swap.",
        "[6, 3, 4, 1, 7] ကို Bubble sort ဖြင့် Pass အလိုက် Trace လုပ်ပြီး Comparison/Swap ကို မှတ်ပါ။"
      ],
      [
        "Search comparison",
        "Search for a chosen value in a short unsorted list using linear search, then sort it and use binary search.",
        "Unsorted List တွင် Linear search လုပ်ပါ။ ထို့နောက် Sort လုပ်ပြီး Binary search နှင့် နှိုင်းယှဉ်ပါ။"
      ],
      [
        "Test plan",
        "Create tests for a score-checking program using normal, boundary and invalid values.",
        "Score စစ်သော Program အတွက် Normal၊ Boundary နှင့် Invalid value များဖြင့် Test plan တည်ဆောက်ပါ。"
      ]
    ],
    "slides": [
      "Algorithmic thinking and abstraction",
      "Bubble sort: trace every comparison and swap",
      "Python bubble sort: variables and loops",
      "Merge sort: divide and merge",
      "Linear search pseudocode",
      "Binary search: median and index positions",
      "Compare algorithm speed and memory",
      "Syntax errors, logic errors and test plans"
    ],
    "essays": [
      [
        "Explain when binary search is more suitable than linear search. Include the requirement that must be met and why it is efficient.",
        "Binary search is suitable for a large, already sorted list. It compares with the middle and discards half the remaining values each time. The list must be sorted before the search.",
        [
          "sorted list",
          "middle value",
          "half",
          "efficient",
          "repeated comparison"
        ]
      ],
      [
        "Compare bubble sort and merge sort for a large data set. Discuss speed, complexity and memory.",
        "Bubble sort is simple but repeats many adjacent comparisons and swaps. Merge sort divides the list and merges ordered sub-lists, making it more suitable for large data sets, but it is more complex and needs additional memory.",
        [
          "simple",
          "repeated comparison",
          "divide",
          "merge",
          "large data",
          "memory"
        ]
      ],
      [
        "Explain the difference between a syntax error and a logic error. Give one example of each and describe how testing helps.",
        "A syntax error breaks the rules of the language and can stop execution, for example a missing colon or incorrect symbol. A logic error allows the program to run but returns the wrong answer. Tests compare expected and actual outputs and help locate faults.",
        [
          "syntax",
          "rule",
          "logic",
          "incorrect output",
          "expected",
          "actual"
        ]
      ],
      [
        "Describe how abstraction and decomposition can help a developer design a route-planning algorithm.",
        "Decomposition splits the task into smaller parts such as reading a destination, finding a route and displaying directions. Abstraction removes irrelevant details and keeps information needed to choose and follow a route.",
        [
          "smaller parts",
          "destination",
          "route",
          "irrelevant details",
          "essential information"
        ]
      ]
    ]
  },
  {
    "id": 2,
    "title": "Sound and storage",
    "myTitle": "အသံနှင့် သိမ်းဆည်းမှု",
    "range": "Student Book pp. 28–48",
    "accent": "gold",
    "overview": "This unit explores digitising analogue sound, sampling and bit depth, calculating audio file sizes, compression, storage devices and media, local and cloud storage, portable storage, backups, user requirements and organisational storage choices.",
    "overviewMy": "ဤယူနစ်တွင် Analogue sound ကို Digital ပြောင်းခြင်း၊ Sampling၊ Bit depth၊ Audio file size တွက်ချက်ခြင်း၊ Compression၊ Storage device/media၊ Local/Cloud storage၊ Portable storage၊ Backup နှင့် User/Organisation လိုအပ်ချက်အလိုက် Storage ရွေးချယ်ခြင်းတို့ကို လေ့လာမည်။",
    "objectives": [
      [
        "Explain how analogue sound is digitised using samples and bit depth.",
        "Sampling နှင့် Bit depth ဖြင့် Analogue sound ကို Digital ပြောင်းပုံ ရှင်းပြနိုင်ရန်။"
      ],
      [
        "Calculate uncompressed audio file sizes using sample rate, bit depth, channels and duration.",
        "Sample rate၊ Bit depth၊ Channel နှင့် Duration အသုံးပြု၍ Audio file size တွက်နိုင်ရန်။"
      ],
      [
        "Compare optical, magnetic and solid-state storage media.",
        "Optical၊ Magnetic နှင့် Solid-state storage များကို နှိုင်းယှဉ်နိုင်ရန်။"
      ],
      [
        "Explain local, portable and cloud storage, including backup methods.",
        "Local၊ Portable၊ Cloud storage နှင့် Backup နည်းလမ်းများ ရှင်းပြနိုင်ရန်။"
      ],
      [
        "Recommend storage based on capacity, speed, access, portability, sharing and budget.",
        "Capacity၊ Speed၊ Access၊ Portability၊ Sharing နှင့် Budget အလိုက် Storage အကြံပြုနိုင်ရန်။"
      ]
    ],
    "lessons": [
      [
        "Digitising sound",
        "Sound begins as an analogue wave that changes continuously. A computer stores digital data, so an analogue-to-digital converter measures the wave at regular time intervals. Each measurement is a sample. Sample rate is the number of samples taken per second and is measured in hertz (Hz). Bit depth is the number of bits used for each sample. Higher sample rates and bit depths can represent sound more accurately but increase the amount of data. A waveform graph uses time on the horizontal axis and amplitude (loudness) on the vertical axis. Mono uses one channel; stereo uses two.",
        "အသံသည် အချိန်နှင့်အမျှ ဆက်တိုက်ပြောင်းလဲသော Analogue wave ဖြစ်သည်။ Computer က Digital data သိမ်းသောကြောင့် ADC သည် သတ်မှတ်ထားသော အချိန်ကာလအလိုက် Wave ကို တိုင်းတာသည်။ တစ်ကြိမ်တိုင်းတာမှုကို Sample ဟုခေါ်သည်။ Sample rate သည် တစ်စက္ကန့်အတွင်း Sample အရေအတွက်ဖြစ်ပြီး Hz ဖြင့် တိုင်းသည်။ Bit depth သည် Sample တစ်ခုကို သိမ်းရန် Bit အရေအတွက်ဖြစ်သည်။",
        "Identify the waveform axes, compare two sample rates, and explain the trade-off between sound accuracy and file size.",
        "Waveform ၏ Axis များကို သတ်မှတ်ပါ။ Sample rate နှစ်မျိုးကို နှိုင်းယှဉ်ပြီး အသံတိကျမှုနှင့် File size အကြား အပြန်အလှန်သက်ရောက်မှု ရှင်းပြပါ။"
      ],
      [
        "Calculating audio file sizes",
        "For uncompressed digital audio, a common calculation is: file size in bits = sample rate × bit depth × number of channels × duration in seconds. Divide by 8 to convert bits to bytes. Be careful with units: 1 byte = 8 bits, and storage units may use decimal or binary prefixes. Stereo has two channels, while mono has one. Compression reduces file size; lossy compression removes some data and may reduce quality, while lossless compression allows the original data to be reconstructed.",
        "Uncompressed audio ၏ File size (bits) ကို Sample rate × Bit depth × Channel အရေအတွက် × Duration (seconds) ဖြင့် တွက်နိုင်သည်။ Bit မှ Byte ပြောင်းရန် 8 ဖြင့် စားပါ။ Mono တွင် Channel 1 ခု၊ Stereo တွင် 2 ခု ရှိသည်။ Lossy compression သည် Data အချို့ကို ဖယ်ရှားပြီး Quality လျော့နိုင်သည်။ Lossless compression တွင် မူရင်း Data ကို ပြန်တည်ဆောက်နိုင်သည်။",
        "Write the formula, substitute each value with units, calculate bits, convert to bytes or megabytes if requested, and state any rounding.",
        "Formula ရေးပါ။ Unit များနှင့် တန်ဖိုးထည့်ပါ။ Bit တွက်ပါ။ လိုအပ်ပါက Byte/MB သို့ ပြောင်းပြီး Rounding ရှင်းပြပါ။"
      ],
      [
        "Storage devices and storage media",
        "A storage device is hardware that reads from or writes to storage media. The medium is where the data is stored. Examples include a hard disk drive and its magnetic platters, an optical disc and its CD/DVD/Blu-ray drive, or flash memory in an SSD and USB drive. Magnetic storage uses magnetic patterns, optical storage uses a laser to read marks on a disc, and solid-state storage uses electronic memory chips with no moving parts. Capacity, speed, durability and cost vary by technology.",
        "Storage device သည် Storage media မှ Data ဖတ်ခြင်း/ရေးခြင်း ပြုလုပ်သော Hardware ဖြစ်သည်။ Media သည် Data သိမ်းထားရာ အရာဖြစ်သည်။ Magnetic storage တွင် သံလိုက်ပုံစံ၊ Optical storage တွင် Disc ပေါ်က အမှတ်များကို Laser ဖြင့်ဖတ်ပြီး Solid-state storage တွင် ရွေ့လျားအစိတ်အပိုင်းမရှိသော Memory chip များကို အသုံးပြုသည်။",
        "For each example, identify the device, the medium, how it stores data, and whether it has moving parts.",
        "ဥပမာတစ်ခုစီအတွက် Device၊ Medium၊ Data သိမ်းနည်းနှင့် Moving parts ရှိ/မရှိ ခွဲခြားပါ။"
      ],
      [
        "Storage device and media characteristics",
        "Storage choices can be compared by capacity, access speed, portability, durability, rewritability, reliability and cost per gigabyte. Magnetic hard drives often offer high capacity at a lower cost per GB but have moving parts. SSDs are fast, quiet and resistant to movement but may cost more per GB. Optical discs are removable and useful for distribution or archiving, but capacity is limited and discs can be scratched. Local storage is physically near the user; cloud storage is reached through the internet and depends on connectivity.",
        "Storage ရွေးချယ်ရာတွင် Capacity၊ Access speed၊ Portability၊ Durability၊ Rewritability၊ Reliability နှင့် GB တစ်ခုလျှင် Cost ကို နှိုင်းယှဉ်ရသည်။ Magnetic hard drive သည် Capacity ကြီးပြီး GB တစ်ခုလျှင် စျေးသက်သာနိုင်သော်လည်း Moving parts ပါသည်။ SSD သည် မြန်ပြီး တုန်ခါမှုဒဏ်ခံနိုင်သည်။ Cloud storage သည် Internet ဖြင့် ဝင်ရောက်ရသည်။",
        "Build a comparison table and select a medium for fast laptop access, low-cost archive storage and removable sharing.",
        "နှိုင်းယှဉ်ဇယားတည်ဆောက်ပြီး Laptop အတွက် မြန်ဆန်သော၊ Archive အတွက် စျေးသက်သာသော၊ ဖိုင်မျှဝေရန် ဖြုတ်တပ်နိုင်သော Media ရွေးပါ။"
      ],
      [
        "Portable storage",
        "Portable storage allows data to be carried between devices. Examples include USB flash drives, external hard drives, SSDs, memory cards and portable optical media. Benefits include small size, offline file transfer and compatibility with many devices. Risks include loss, theft, physical damage, limited capacity and malware transfer. Removable storage should be safely ejected where required, scanned when appropriate and protected when it contains sensitive information.",
        "Portable storage သည် Device များအကြား Data သယ်ယူပို့ဆောင်နိုင်စေသည်။ USB flash drive၊ External HDD/SSD၊ Memory card နှင့် Optical media တို့ ပါဝင်သည်။ အရွယ်အစားသေးခြင်း၊ Internet မလိုဘဲ ဖိုင်ပို့နိုင်ခြင်း အကျိုးရှိသော်လည်း ပျောက်ဆုံးခြင်း၊ ခိုးယူခံရခြင်း၊ ပျက်စီးခြင်းနှင့် Malware ကူးစက်နိုင်ခြင်း အန္တရာယ်ရှိသည်။",
        "Choose a portable medium for a camera, a travelling worker and a desktop backup, giving one advantage and one risk for each.",
        "Camera၊ ခရီးသွားဝန်ထမ်းနှင့် Desktop backup အတွက် Portable medium ရွေးပြီး အကျိုးကျေးဇူးနှင့် အန္တရာယ်တစ်ခုစီ ဖော်ပြပါ။"
      ],
      [
        "User storage requirements",
        "A suitable storage solution begins with the user’s requirements: purpose, data type, amount, access frequency, speed, portability, sharing, security, backup needs and budget. Backup is a separate copy that can restore data after loss or corruption. A full backup copies all selected data. A differential backup stores changes since the last full backup. An incremental backup stores changes since the previous backup (full or incremental). Each approach balances restore time, storage space and backup duration.",
        "သင့်လျော်သော Storage ရွေးရန် အသုံးပြုသူ၏ ရည်ရွယ်ချက်၊ Data အမျိုးအစား/ပမာဏ၊ အသုံးပြုနှုန်း၊ Speed၊ Portability၊ Sharing၊ Security၊ Backup နှင့် Budget ကို စဉ်းစားရသည်။ Backup သည် Data ပျောက်ဆုံး/ပျက်စီးလျှင် ပြန်ယူရန် သီးခြားမိတ္တူတစ်ခုဖြစ်သည်။ Full သည် Data အားလုံး၊ Differential သည် နောက်ဆုံး Full backup နောက်ပိုင်း ပြောင်းလဲမှု၊ Incremental သည် ယခင် Backup နောက်ပိုင်း ပြောင်းလဲမှုကို သိမ်းသည်။",
        "List user requirements, rank them by importance, compare suitable media and choose a backup schedule.",
        "User requirement များကို စာရင်းပြုစုပါ။ အရေးကြီးမှုအလိုက် စီပါ။ Media များကို နှိုင်းယှဉ်ပြီး Backup schedule ရွေးပါ။"
      ],
      [
        "Storage needs of an organisation",
        "An organisation may have different storage needs for office workers, remote employees, travelling staff and shared systems. A desktop office may use high-capacity magnetic or solid-state storage with central backup. Remote workers may need laptop SSDs and secure cloud collaboration. Travelling staff benefit from durable portable solid-state devices. An organisation should plan shared backups, access permissions, encryption, retention, recovery and off-site copies. The best solution is a system, not simply one device.",
        "အဖွဲ့အစည်းတစ်ခုတွင် Office ဝန်ထမ်း၊ Remote ဝန်ထမ်း၊ ခရီးသွားဝန်ထမ်းနှင့် Shared system များ၏ Storage လိုအပ်ချက် မတူနိုင်ပါ။ Office တွင် Capacity ကြီးသော Drive နှင့် Central backup သုံးနိုင်သည်။ Remote ဝန်ထမ်းများအတွက် Laptop SSD နှင့် လုံခြုံသော Cloud collaboration အသုံးဝင်သည်။ အဖွဲ့အစည်းသည် Permission၊ Encryption၊ Retention၊ Recovery နှင့် Off-site backup များကို စီမံရသည်။",
        "Map each staff group to its primary and additional storage, then add shared backup, access control and recovery arrangements.",
        "ဝန်ထမ်းအုပ်စုတစ်ခုစီအတွက် Main နှင့် Additional storage ရွေးပါ။ Shared backup၊ Access control နှင့် Recovery စနစ် ထည့်ပါ။"
      ]
    ],
    "terms": [
      [
        "Analogue sound",
        "A continuously changing sound signal.",
        "ဆက်တိုက်ပြောင်းလဲနေသော အသံလှိုင်း။"
      ],
      [
        "Digital sound",
        "Sound represented by numeric samples.",
        "နံပါတ် Sample များဖြင့် ကိုယ်စားပြုသော အသံ။"
      ],
      [
        "Sampling",
        "Measuring a signal at regular time intervals.",
        "အချိန်ကာလမှန်မှန် Signal ကို တိုင်းတာခြင်း။"
      ],
      [
        "Sample rate",
        "Number of samples per second, measured in Hz.",
        "တစ်စက္ကန့် Sample အရေအတွက်၊ Hz ဖြင့်တိုင်းသည်။"
      ],
      [
        "Bit depth",
        "Number of bits used for each audio sample.",
        "Audio sample တစ်ခုအတွက် အသုံးပြုသော Bit အရေအတွက်။"
      ],
      [
        "Waveform",
        "A visual graph of a sound signal.",
        "အသံ Signal ကို Graph ဖြင့် ပြသခြင်း။"
      ],
      [
        "Amplitude",
        "The size of a wave; relates to loudness.",
        "Wave အမြင့်၊ အသံကျယ်မှုနှင့် ဆက်စပ်သည်။"
      ],
      [
        "Mono",
        "Audio with one channel.",
        "Channel တစ်ခုတည်းရှိသော အသံ။"
      ],
      [
        "Stereo",
        "Audio with two channels.",
        "Channel နှစ်ခုပါသော အသံ။"
      ],
      [
        "ADC",
        "Analogue-to-digital converter.",
        "Analogue ကို Digital သို့ ပြောင်းစက်။"
      ],
      [
        "Uncompressed audio",
        "Audio stored without removing data to reduce size.",
        "Data မဖယ်ဘဲ သိမ်းထားသော Audio။"
      ],
      [
        "Lossy compression",
        "Compression that removes some data permanently.",
        "Data အချို့ကို အပြီးတိုင် ဖယ်ရှားသော Compression။"
      ],
      [
        "Lossless compression",
        "Compression that allows the original data to be restored.",
        "မူရင်း Data ပြန်ရနိုင်သော Compression။"
      ],
      [
        "Storage device",
        "Hardware that reads or writes data on media.",
        "Media ပေါ် Data ဖတ်/ရေးသော Hardware။"
      ],
      [
        "Storage medium",
        "The material or device on which data is stored.",
        "Data သိမ်းထားသည့် Media။"
      ],
      [
        "Magnetic storage",
        "Storage using magnetic patterns.",
        "သံလိုက်ပုံစံဖြင့် သိမ်းဆည်းခြင်း။"
      ],
      [
        "Optical storage",
        "Storage read using a laser.",
        "Laser ဖြင့် ဖတ်ရှုသော Storage။"
      ],
      [
        "Solid-state storage",
        "Storage using electronic memory chips.",
        "Electronic memory chip ဖြင့် သိမ်းသော Storage။"
      ],
      [
        "HDD",
        "A hard disk drive using magnetic platters.",
        "သံလိုက် Disk platter ပါသော Drive။"
      ],
      [
        "SSD",
        "A solid-state drive with no moving parts.",
        "Moving parts မပါသော Solid-state Drive။"
      ],
      [
        "USB flash drive",
        "A small removable solid-state storage device.",
        "ဖြုတ်တပ်နိုင်သော Solid-state USB device။"
      ],
      [
        "Memory card",
        "A small removable flash storage medium.",
        "သေးငယ်သော ဖြုတ်တပ်နိုင်သည့် Flash storage။"
      ],
      [
        "Local storage",
        "Storage accessed directly at the user’s location.",
        "အသုံးပြုသူအနီးတွင် တိုက်ရိုက်ဝင်သုံးသော Storage။"
      ],
      [
        "Cloud storage",
        "Storage accessed over an internet service.",
        "Internet မှတစ်ဆင့် ဝင်သုံးသော Storage။"
      ],
      [
        "Capacity",
        "The amount of data a medium can store.",
        "Media တစ်ခု သိမ်းနိုင်သော Data ပမာဏ။"
      ],
      [
        "Access time",
        "Time taken to retrieve data.",
        "Data ပြန်ရယူရန် ကြာသောအချိန်။"
      ],
      [
        "Backup",
        "A separate copy used to recover data.",
        "Data ပြန်ယူရန် သီးခြားမိတ္တူ။"
      ],
      [
        "Full backup",
        "A copy of all selected data.",
        "ရွေးထားသော Data အားလုံး၏ မိတ္တူ။"
      ],
      [
        "Differential backup",
        "Copies changes since the last full backup.",
        "နောက်ဆုံး Full backup နောက်ပိုင်း ပြောင်းလဲမှုများ။"
      ],
      [
        "Incremental backup",
        "Copies changes since the previous backup.",
        "ယခင် Backup နောက်ပိုင်း ပြောင်းလဲမှုများ။"
      ],
      [
        "Portability",
        "How easily a device can be carried.",
        "Device ကို သယ်ဆောင်ရလွယ်ကူမှု။"
      ],
      [
        "Rewritable",
        "Able to be written to again.",
        "ထပ်မံ Data ရေးနိုင်သော။"
      ],
      [
        "Retention",
        "How long data is kept.",
        "Data ကို မည်မျှကြာ သိမ်းထားမည်။"
      ],
      [
        "Recovery",
        "Restoring data after loss or damage.",
        "ပျောက်ဆုံး/ပျက်စီးပြီးနောက် Data ပြန်ယူခြင်း။"
      ]
    ],
    "examples": [
      "A waveform is sampled many times per second to create digital sound.",
      "A stereo recording has two channels and usually requires twice the uncompressed data of a comparable mono recording.",
      "An organisation can use SSDs for travelling staff and central backups for recovery."
    ],
    "examplesMy": [
      "Digital sound ဖန်တီးရန် Waveform ကို တစ်စက္ကန့်အတွင်း အကြိမ်များစွာ Sample ယူသည်။",
      "Stereo တွင် Channel နှစ်ခုရှိသောကြောင့် တူညီသည့် Mono နှင့် နှိုင်းယှဉ်လျှင် Uncompressed data ပိုလိုသည်။",
      "ခရီးသွားဝန်ထမ်းအတွက် SSD၊ Data ပြန်ယူရန် Central backup သုံးနိုင်သည်။"
    ],
    "table": {
      "caption": "Audio and storage decision guide",
      "headers": [
        "Factor",
        "Higher / faster option",
        "Trade-off"
      ],
      "rows": [
        [
          "Sample rate",
          "More samples each second",
          "More accurate representation; more data"
        ],
        [
          "Bit depth",
          "More bits per sample",
          "Greater dynamic detail; larger file"
        ],
        [
          "Channels",
          "Stereo = 2 channels",
          "Wider sound; roughly double mono data"
        ],
        [
          "Magnetic HDD",
          "High capacity, low cost per GB",
          "Moving parts; may be slower"
        ],
        [
          "SSD / flash",
          "Fast, durable, no moving parts",
          "Often higher cost per GB"
        ],
        [
          "Cloud",
          "Remote access and sharing",
          "Depends on internet and service access"
        ]
      ]
    },
    "activities": [
      [
        "Audio size calculation",
        "Calculate the size of 30 seconds of stereo audio at 44,100 samples/s and 16 bits/sample. Show every step.",
        "44,100 sample/s၊ 16 bit/sample၊ stereo 30 seconds အတွက် file size တွက်ပါ။ အဆင့်တိုင်းပြပါ။"
      ],
      [
        "Storage recommendation",
        "Recommend storage for a photographer who needs to carry extra camera storage and back up files at home.",
        "Camera အတွက် ထပ်ဆောင်း Storage သယ်ရမည့် Photographer ကို Storage နှင့် Home backup အကြံပြုပါ။"
      ],
      [
        "Backup comparison",
        "Create a simple weekly backup plan using full and incremental backups.",
        "Full နှင့် Incremental backup ပါဝင်သော အပတ်စဉ် Backup plan ဖန်တီးပါ။"
      ]
    ],
    "slides": [
      "Digitising sound: sampling and bit depth",
      "Waveforms, mono and stereo channels",
      "Audio file size formula and worked examples",
      "Magnetic, optical and solid-state media",
      "Storage characteristics and local/cloud options",
      "Portable storage devices and risks",
      "User needs and backup types",
      "Organisational storage planning"
    ],
    "essays": [
      [
        "Explain how sample rate and bit depth affect digital audio quality and file size.",
        "A higher sample rate records the wave more frequently, while a greater bit depth gives more possible values for each sample. Both can improve representation of sound but increase the number of bits and therefore the file size.",
        [
          "sample rate",
          "frequently",
          "bit depth",
          "possible values",
          "file size"
        ]
      ],
      [
        "Compare lossy and lossless compression for a music streaming service and an audio archive.",
        "Lossy compression creates smaller files suited to streaming and limited bandwidth, but removed data cannot be restored and quality may decrease. Lossless compression preserves the original data and suits archiving, but files are larger and need more storage.",
        [
          "lossy",
          "smaller files",
          "data removed",
          "quality",
          "lossless",
          "original data",
          "larger"
        ]
      ],
      [
        "Recommend a storage system for an organisation with office, remote and travelling staff.",
        "Office staff may use central high-capacity storage with controlled access and backups. Remote staff need secure cloud collaboration and local storage. Travelling staff need robust portable solid-state storage. The organisation should include encryption, access permissions, shared backup and recovery.",
        [
          "central storage",
          "cloud",
          "portable",
          "solid-state",
          "encryption",
          "backup",
          "recovery"
        ]
      ],
      [
        "Describe the calculation for an uncompressed stereo audio file and explain the units used.",
        "Multiply sample rate by bit depth, number of channels and duration in seconds to obtain bits. Divide by eight for bytes, then convert using the stated storage units. Always show the units and use the duration in seconds.",
        [
          "sample rate",
          "bit depth",
          "channels",
          "duration",
          "bits",
          "divide by eight",
          "bytes"
        ]
      ]
    ]
  },
  {
    "id": 3,
    "title": "Input, process, output",
    "myTitle": "Input၊ Process နှင့် Output",
    "range": "Student Book pp. 50–70",
    "accent": "rose",
    "overview": "This unit examines the input-process-output model, computer components and their roles, high- and low-level programming languages, RISC and CISC processors, BIOS and ROM, RAM, virtual memory and user memory requirements.",
    "overviewMy": "ဤယူနစ်တွင် Input-Process-Output model၊ Computer component များနှင့် ၎င်းတို့၏ လုပ်ဆောင်ချက်၊ High/Low-level programming language၊ RISC/CISC processor၊ BIOS/ROM၊ RAM၊ Virtual memory နှင့် User memory လိုအပ်ချက်များကို လေ့လာမည်။",
    "objectives": [
      [
        "Explain how input, processing, storage and output work together.",
        "Input၊ Process၊ Storage နှင့် Output တို့ အပြန်အလှန် လုပ်ဆောင်ပုံ ရှင်းပြနိုင်ရန်။"
      ],
      [
        "Identify common computer components and describe their functions.",
        "Computer component များကို ခွဲခြားပြီး လုပ်ဆောင်ချက် ဖော်ပြနိုင်ရန်။"
      ],
      [
        "Compare high-level and low-level programming languages.",
        "High-level နှင့် Low-level language ကို နှိုင်းယှဉ်နိုင်ရန်။"
      ],
      [
        "Describe processor architectures and the roles of BIOS, ROM and RAM.",
        "Processor architecture နှင့် BIOS၊ ROM၊ RAM တို့၏ အခန်းကဏ္ဍ ရှင်းပြနိုင်ရန်။"
      ],
      [
        "Recommend memory and storage requirements for different users.",
        "အသုံးပြုသူအမျိုးမျိုးအတွက် Memory/Storage လိုအပ်ချက် အကြံပြုနိုင်ရန်။"
      ]
    ],
    "lessons": [
      [
        "The computer input and output system",
        "A computer system receives data through input devices, processes it using instructions and components, stores data where needed, and presents results through output devices. This is often described as the input-process-output (IPO) cycle. A keyboard, mouse, microphone or sensor can provide input. The CPU processes instructions and data. Storage keeps files for later use. A monitor, speaker or printer presents output. Some devices can perform both input and output, such as a touchscreen.",
        "Computer system သည် Input device များမှ Data လက်ခံသည်။ CPU နှင့် အခြား Component များဖြင့် Process လုပ်ပြီး လိုအပ်သည့်နေရာတွင် သိမ်းဆည်းကာ Output device များဖြင့် ရလဒ်ပြသသည်။ ဤလုပ်ငန်းစဉ်ကို Input-Process-Output (IPO) cycle ဟုခေါ်သည်။ Touchscreen ကဲ့သို့ Device တချို့သည် Input/Output နှစ်မျိုးစလုံး လုပ်နိုင်သည်။",
        "For a real task, identify the input, processing actions, stored data and final output.",
        "လက်တွေ့လုပ်ငန်းတစ်ခုအတွက် Input၊ Processing၊ သိမ်းဆည်းသော Data နှင့် နောက်ဆုံး Output ကို ခွဲခြားပါ။"
      ],
      [
        "Computer components",
        "A computer is built from components with different roles. The CPU executes instructions and coordinates processing. The motherboard provides connections between components. RAM holds active programs and data temporarily. ROM or firmware memory stores essential start-up instructions. Secondary storage retains files when power is off. The power supply unit provides electrical power. Input and output interfaces connect peripherals. Performance depends on how components work together rather than on one component alone.",
        "Computer တစ်လုံးတွင် အခန်းကဏ္ဍမတူသော Component များ ပါဝင်သည်။ CPU သည် Instruction များကို Execute လုပ်သည်။ Motherboard သည် Component များကို ချိတ်ဆက်ပေးသည်။ RAM သည် လက်ရှိအသုံးပြုသည့် Program/Data ကို ယာယီသိမ်းသည်။ ROM/Firmware သည် Start-up instruction များကို သိမ်းနိုင်သည်။ Secondary storage သည် မီးပိတ်သော်လည်း File များကို ထိန်းထားသည်။",
        "Label a system diagram and connect each component with its main role: processing, temporary memory, firmware, long-term storage or power.",
        "System diagram တွင် Label တပ်ပြီး Processing၊ Temporary memory၊ Firmware၊ Long-term storage နှင့် Power တို့နှင့် ချိတ်ဆက်ပါ။"
      ],
      [
        "High- and low-level programming languages",
        "High-level languages use statements that are easier for people to read and write. They are generally portable and require translation by a compiler or interpreter. Low-level languages are closer to the processor’s instruction set. Assembly language uses mnemonic instructions and is translated by an assembler; machine code is represented in binary. Low-level code can provide close control of hardware but is more difficult to write and maintain. The Student Book compares language level, readability and translation.",
        "High-level language များသည် လူဖတ်ရလွယ်သော စာသား/ညွှန်ကြားချက်များကို အသုံးပြုသည်။ Compiler သို့မဟုတ် Interpreter ဖြင့် ဘာသာပြန်ရသည်။ Low-level language သည် Processor instruction နှင့် ပိုနီးစပ်သည်။ Assembly language တွင် Mnemonic များသုံးပြီး Assembler ဖြင့် ဘာသာပြန်သည်။ Machine code သည် Binary ဖြင့် ဖော်ပြသည်။",
        "Compare readability, portability, translation and hardware control for Python, assembly and machine code.",
        "Python၊ Assembly နှင့် Machine code တို့၏ ဖတ်ရလွယ်မှု၊ Portability၊ Translation နှင့် Hardware control ကို နှိုင်းယှဉ်ပါ။"
      ],
      [
        "RISC and CISC processors",
        "RISC means Reduced Instruction Set Computer and is based on a smaller set of simpler instructions. CISC means Complex Instruction Set Computer and provides a larger set of more complex instructions. A RISC design can execute simple instructions efficiently, while a CISC instruction may complete a more complex task in fewer instructions. Actual performance depends on processor implementation, memory, software and workload. The key comparison is instruction-set design, not a universal claim that one type is always faster.",
        "RISC သည် Reduced Instruction Set Computer ဖြစ်ပြီး ရိုးရှင်းသော Instruction အနည်းငယ်ကို အခြေခံသည်။ CISC သည် Complex Instruction Set Computer ဖြစ်ပြီး ပိုရှုပ်ထွေးသော Instruction အများအပြား ပံ့ပိုးသည်။ RISC သည် ရိုးရှင်းသော Instruction များကို ထိရောက်စွာ လုပ်ဆောင်နိုင်ပြီး CISC သည် Instruction တစ်ခုဖြင့် Task ပိုရှုပ်ထွေးမှုကို ပြီးစေနိုင်သည်။ အမြန်နှုန်းသည် Architecture တစ်ခုတည်းပေါ် မူတည်ခြင်းမဟုတ်ပါ။",
        "Compare the size and complexity of instructions, the number of instructions needed and the role of the compiler.",
        "Instruction အရေအတွက်/ရှုပ်ထွေးမှု၊ လိုအပ်သော Instruction စုစုပေါင်းနှင့် Compiler ၏ အခန်းကဏ္ဍကို နှိုင်းယှဉ်ပါ။"
      ],
      [
        "BIOS and ROM",
        "BIOS (Basic Input/Output System) or equivalent firmware runs when a computer starts. It performs initial checks and helps initialise hardware so that a boot process can begin. Traditionally, BIOS firmware was stored in ROM or other non-volatile memory. ROM retains its contents without power, unlike ordinary RAM. Modern computers may use flash-based firmware that can be updated, but the key idea is that start-up instructions must be available before the main operating system loads.",
        "BIOS (Basic Input/Output System) သို့မဟုတ် Firmware သည် Computer စတင်ချိန်တွင် လုပ်ဆောင်ပြီး Hardware ကို စစ်ဆေး/စတင်ပြင်ဆင်ကာ Boot process စတင်နိုင်ရန် ကူညီသည်။ BIOS သည် ရိုးရာအရ ROM ကဲ့သို့ Non-volatile memory တွင် သိမ်းထားသည်။ ROM သည် Power ပိတ်သော်လည်း Content မပျောက်ပါ။",
        "Sequence the start-up process from power on to firmware checks, boot device selection and operating-system loading.",
        "Power on မှ Firmware check၊ Boot device ရွေးခြင်းနှင့် Operating system load လုပ်ခြင်းအထိ အစီအစဉ်တကျ စီပါ။"
      ],
      [
        "Random access memory",
        "RAM is the computer’s working memory. Active programs, instructions and data are loaded into RAM so that the CPU can access them quickly. RAM is volatile: its contents are normally lost when power is removed. More RAM can allow more programs or larger working data sets to remain available without relying as heavily on slower secondary storage. RAM capacity is measured in bytes and their multiples, such as GB.",
        "RAM သည် Computer ၏ အလုပ်လုပ်နေစဉ် အသုံးပြုသော Memory ဖြစ်သည်။ လက်ရှိ Program၊ Instruction နှင့် Data များကို RAM ထဲ Load လုပ်ပြီး CPU က မြန်မြန်ဝင်ရောက်နိုင်သည်။ RAM သည် Volatile ဖြစ်သောကြောင့် Power ပိတ်လျှင် Content ပျောက်သည်။ RAM ပိုများပါက Program များစွာကို တပြိုင်နက် ပိုကောင်းစွာ လုပ်ဆောင်နိုင်သည်။",
        "Explain what is loaded into RAM, why it is volatile and how increasing RAM can affect multitasking.",
        "RAM ထဲတွင် ဘာများ Load လုပ်ထားကြောင်း၊ Volatile ဖြစ်ရသည့်အကြောင်းနှင့် RAM တိုးခြင်းက Multitasking ကို မည်သို့သက်ရောက်ကြောင်း ရှင်းပြပါ။"
      ],
      [
        "Virtual memory",
        "Virtual memory is a memory-management technique that uses part of secondary storage as an extension of RAM when physical memory is insufficient. The operating system moves data or pages between RAM and storage. This can let more applications run, but storage is usually slower than RAM, so performance may fall when the computer relies heavily on virtual memory. Virtual memory does not turn a hard drive into RAM of equal speed.",
        "Virtual memory သည် Physical RAM မလုံလောက်သည့်အခါ Secondary storage ၏ တစ်စိတ်တစ်ပိုင်းကို RAM ၏ Extension အဖြစ် အသုံးပြုသော Memory management နည်းလမ်းဖြစ်သည်။ Operating system သည် Data/Page များကို RAM နှင့် Storage အကြား ရွှေ့ပြောင်းသည်။ Program ပိုများစွာ Run နိုင်သော်လည်း Storage သည် RAM ထက်နှေးသောကြောင့် Performance ကျနိုင်သည်။",
        "Draw a flow showing an active page in RAM, a page moved to storage and the page brought back when needed.",
        "Active page ကို RAM ထဲတွင် ပြပါ။ မလိုအပ်ချိန် Storage သို့ ရွှေ့ပြီး လိုအပ်ချိန် ပြန်ယူသည့် Flow ဆွဲပါ။"
      ],
      [
        "Users’ memory requirements",
        "Memory and storage requirements depend on the tasks and software a user needs. A basic office user may need modest RAM and storage, while video editing, 3D modelling or large data processing can require more. Consider file sizes, number of applications open, operating-system requirements, speed, capacity, upgrade options and budget. RAM supports active work; storage retains files and installed applications. A recommendation should explain the user’s workload rather than simply choosing the largest number.",
        "User တစ်ဦး၏ Memory/Storage လိုအပ်ချက်သည် အသုံးပြုမည့် Task နှင့် Software ပေါ် မူတည်သည်။ Office အလုပ်အတွက် RAM/Storage အလယ်အလတ် လိုနိုင်သော်လည်း Video editing၊ 3D modelling နှင့် Data processing အတွက် ပိုလိုနိုင်သည်။ File size၊ တပြိုင်နက်ဖွင့်သော Application၊ OS requirement၊ Speed၊ Capacity၊ Upgrade နှင့် Budget ကို စဉ်းစားရသည်။",
        "Read a user scenario, list applications and file sizes, estimate active memory demand and justify a suitable RAM/storage combination.",
        "User scenario ကိုဖတ်ပါ။ Application နှင့် File size စာရင်းရေးပါ။ Active memory လိုအပ်ချက် ခန့်မှန်းပြီး RAM/Storage ပေါင်းစပ်မှုကို အကြောင်းပြပါ။"
      ]
    ],
    "terms": [
      [
        "Input",
        "Data or signals entered into a computer.",
        "Computer ထဲသို့ ထည့်သွင်းသော Data/Signal။"
      ],
      [
        "Processing",
        "Actions performed on data according to instructions.",
        "Instruction အတိုင်း Data ကို လုပ်ဆောင်ခြင်း။"
      ],
      [
        "Output",
        "Information produced by a computer system.",
        "Computer system မှ ထုတ်ပေးသော အချက်အလက်။"
      ],
      [
        "IPO cycle",
        "Input, process and output stages of a system.",
        "Input၊ Process၊ Output အဆင့်သုံးဆင့်။"
      ],
      [
        "CPU",
        "Central processing unit that executes instructions.",
        "Instruction များ Execute လုပ်သော Central processing unit။"
      ],
      [
        "Motherboard",
        "Main circuit board connecting computer components.",
        "Computer component များ ချိတ်ဆက်ထားသော Main circuit board။"
      ],
      [
        "RAM",
        "Volatile working memory for active data and programs.",
        "လက်ရှိ Data/Program သိမ်းသော Volatile working memory။"
      ],
      [
        "ROM",
        "Non-volatile memory that retains data without power.",
        "Power မရှိလည်း Data ထိန်းထားသော Non-volatile memory။"
      ],
      [
        "Firmware",
        "Low-level software stored in a device.",
        "Device အတွင်း သိမ်းထားသော Low-level software။"
      ],
      [
        "BIOS",
        "Firmware that initialises hardware during start-up.",
        "စတင်ချိန် Hardware ပြင်ဆင်ပေးသော Firmware။"
      ],
      [
        "Boot process",
        "Sequence that starts a computer and loads its OS.",
        "Computer စတင်ပြီး OS Load လုပ်သည့် အစီအစဉ်။"
      ],
      [
        "Volatile memory",
        "Memory that loses contents when power is removed.",
        "Power ပိတ်လျှင် Content ပျောက်သော Memory။"
      ],
      [
        "Non-volatile memory",
        "Memory that retains data without power.",
        "Power မရှိလည်း Data ထိန်းထားသော Memory။"
      ],
      [
        "High-level language",
        "A human-readable programming language.",
        "လူဖတ်ရလွယ်သော Programming language။"
      ],
      [
        "Low-level language",
        "A language close to machine instructions.",
        "Machine instruction နှင့် နီးစပ်သော Language။"
      ],
      [
        "Machine code",
        "Binary instructions executed by the processor.",
        "Processor က Execute လုပ်သော Binary instruction။"
      ],
      [
        "Assembly language",
        "A low-level language using mnemonic instructions.",
        "Mnemonic instruction အသုံးပြုသော Low-level language။"
      ],
      [
        "Compiler",
        "Translates source code into another form before execution.",
        "Execute မလုပ်မီ Source code ဘာသာပြန်သော Tool။"
      ],
      [
        "Interpreter",
        "Translates and executes source instructions step by step.",
        "Source instruction များကို အဆင့်လိုက် ဘာသာပြန်လုပ်ဆောင်သော Tool။"
      ],
      [
        "RISC",
        "Reduced Instruction Set Computer architecture.",
        "ရိုးရှင်းသော Instruction set ကို အခြေခံသော Architecture။"
      ],
      [
        "CISC",
        "Complex Instruction Set Computer architecture.",
        "ရှုပ်ထွေးသော Instruction set ပိုများသော Architecture။"
      ],
      [
        "Instruction set",
        "The operations understood by a processor.",
        "Processor နားလည်သော Operation စုစည်းမှု။"
      ],
      [
        "Virtual memory",
        "Storage used as an extension of RAM.",
        "RAM မလုံလောက်သောအခါ Storage ကို အစားထိုးသုံးခြင်း။"
      ],
      [
        "Memory page",
        "A fixed-size block used in virtual-memory management.",
        "Virtual memory တွင် အသုံးပြုသော ပုံသေအရွယ်အစား Data block။"
      ],
      [
        "Secondary storage",
        "Non-volatile storage for files and applications.",
        "File/Application သိမ်းသော Non-volatile Storage။"
      ],
      [
        "PSU",
        "Power supply unit providing electrical power.",
        "Computer အစိတ်အပိုင်းများသို့ လျှပ်စစ်ပေးသော Unit။"
      ],
      [
        "Peripheral",
        "An external or additional input/output device.",
        "အပို Input/Output device။"
      ],
      [
        "Cache memory",
        "Small, fast memory holding frequently used data.",
        "မကြာခဏသုံးသော Data ကို သိမ်းသော မြန်ဆန်သေးငယ်သည့် Memory။"
      ],
      [
        "Clock speed",
        "Rate at which a processor clock operates.",
        "Processor clock လည်ပတ်မှုနှုန်း။"
      ],
      [
        "Core",
        "An individual processing unit within a CPU.",
        "CPU အတွင်းရှိ Processing unit တစ်ခု။"
      ],
      [
        "Capacity",
        "Amount of data that a memory or device can hold.",
        "Memory/Device သိမ်းနိုင်သော Data ပမာဏ။"
      ],
      [
        "Multitasking",
        "Running more than one application or task.",
        "Application/Task များစွာကို လုပ်ဆောင်ခြင်း။"
      ],
      [
        "Operating system",
        "System software managing hardware and applications.",
        "Hardware နှင့် Application များကို စီမံသော System software။"
      ],
      [
        "Instruction cycle",
        "A processor’s sequence for fetching and executing instructions.",
        "Instruction ကို Fetch/Execute လုပ်သည့် CPU လုပ်ငန်းစဉ်။"
      ],
      [
        "Memory hierarchy",
        "Arrangement of memory by speed, size and cost.",
        "Speed၊ Size၊ Cost အလိုက် Memory စီစဉ်ထားမှု။"
      ]
    ],
    "examples": [
      "A touchscreen accepts touch input and displays visual output.",
      "A computer loads active programs into RAM while files remain stored on an SSD or HDD.",
      "Virtual memory may help when RAM is full, but performance can slow because storage is slower."
    ],
    "examplesMy": [
      "Touchscreen သည် Touch ကို Input လက်ခံပြီး ပုံရိပ်ကို Output ပြသသည်။",
      "Program များကို RAM ထဲ Load လုပ်သော်လည်း File များကို SSD/HDD တွင် သိမ်းထားနိုင်သည်။",
      "RAM ပြည့်သွားလျှင် Virtual memory က ကူညီနိုင်သော်လည်း Storage နှေးသောကြောင့် Performance ကျနိုင်သည်။"
    ],
    "table": {
      "caption": "Computer system and memory roles",
      "headers": [
        "Component",
        "Main role",
        "Keeps data without power?"
      ],
      "rows": [
        [
          "CPU",
          "Executes instructions",
          "Not a storage location"
        ],
        [
          "RAM",
          "Active programs and data",
          "No (volatile)"
        ],
        [
          "ROM / firmware",
          "Start-up instructions",
          "Yes (non-volatile)"
        ],
        [
          "SSD / HDD",
          "Files and applications",
          "Yes"
        ],
        [
          "BIOS / firmware",
          "Initialises hardware",
          "Stored in non-volatile memory"
        ]
      ]
    },
    "activities": [
      [
        "IPO diagram",
        "Draw an IPO diagram for a digital camera taking a photograph and saving it.",
        "ဓာတ်ပုံရိုက်ပြီး သိမ်းသော Digital camera အတွက် IPO diagram ဆွဲပါ။"
      ],
      [
        "Component map",
        "Create a labelled desktop diagram showing CPU, RAM, motherboard, storage, PSU and peripherals.",
        "CPU၊ RAM၊ Motherboard၊ Storage၊ PSU နှင့် Peripheral များပါသော Desktop diagram ဆွဲပါ။"
      ],
      [
        "Memory advice",
        "Compare the needs of an office user and a video editor and recommend RAM and storage for each.",
        "Office user နှင့် Video editor ၏ လိုအပ်ချက် နှိုင်းယှဉ်ပြီး RAM/Storage အကြံပြုပါ။"
      ]
    ],
    "slides": [
      "Input, process and output model",
      "Computer components and their functions",
      "High-level and low-level programming languages",
      "RISC and CISC instruction sets",
      "BIOS, ROM and start-up sequence",
      "Random access memory and volatility",
      "Virtual memory: paging and storage",
      "Estimating memory needs for different users"
    ],
    "essays": [
      [
        "Describe the input-process-output cycle using an example of a computerised ticket machine.",
        "The user enters a destination and payment details as input. The processor checks the request and calculates the fare. The system stores transaction details and outputs a ticket and change or a digital confirmation.",
        [
          "input",
          "processor",
          "calculate",
          "store",
          "ticket",
          "output"
        ]
      ],
      [
        "Compare high-level and low-level programming languages. Include readability, translation and hardware control.",
        "High-level languages use readable statements and are generally easier to develop and maintain, but need a compiler or interpreter. Low-level languages are closer to processor instructions and can give greater hardware control, but are harder to write and maintain.",
        [
          "readable",
          "compiler",
          "interpreter",
          "processor",
          "hardware control",
          "harder"
        ]
      ],
      [
        "Explain the difference between RAM and ROM and describe the role of BIOS during start-up.",
        "RAM is volatile working memory for active programs and data. ROM is non-volatile and retains stored instructions. BIOS firmware initialises hardware and begins the boot process before the operating system loads.",
        [
          "volatile",
          "working memory",
          "non-volatile",
          "firmware",
          "initialises",
          "boot"
        ]
      ],
      [
        "A designer edits high-resolution video while several applications are open. Explain the memory requirements and the possible role of virtual memory.",
        "Video editing and multiple applications require substantial RAM for active data and programs. Fast secondary storage is useful for large video files. Virtual memory can extend available memory by moving pages to storage when RAM is insufficient, but it is slower than RAM and may reduce performance.",
        [
          "RAM",
          "active programs",
          "large files",
          "virtual memory",
          "storage",
          "slower"
        ]
      ]
    ]
  },
  {
    "id": 4,
    "title": "Computing for all?",
    "myTitle": "လူတိုင်းအတွက် Computing လား?",
    "range": "Student Book pp. 72–96",
    "accent": "green",
    "overview": "This unit looks at network types and layouts, the benefits and disadvantages of networks, network scenarios, open-source and proprietary software, software licences, remote working, copyright and ethics, cybercrime and the digital divide.",
    "overviewMy": "ဤယူနစ်တွင် Network အမျိုးအစားနှင့် Layout၊ Network ၏ အားသာချက်/အားနည်းချက်၊ Network scenario များ၊ Open-source/Proprietary software၊ Software licence၊ Remote working၊ Copyright/Ethics၊ Cybercrime နှင့် Digital divide တို့ကို လေ့လာမည်။",
    "objectives": [
      [
        "Describe common network types and layouts.",
        "Network အမျိုးအစားနှင့် Layout များကို ဖော်ပြနိုင်ရန်။"
      ],
      [
        "Explain benefits, limitations and suitable network choices for different scenarios.",
        "Network ၏ အကျိုးကျေးဇူး/ကန့်သတ်ချက်နှင့် Scenario အလိုက် ရွေးချယ်မှု ရှင်းပြနိုင်ရန်။"
      ],
      [
        "Compare open-source, proprietary software and software licences.",
        "Open-source၊ Proprietary software နှင့် Licence များကို နှိုင်းယှဉ်နိုင်ရန်။"
      ],
      [
        "Explain remote working, copyright, ethics and cybercrime risks.",
        "Remote working၊ Copyright၊ Ethics နှင့် Cybercrime အန္တရာယ်များ ရှင်းပြနိုင်ရန်။"
      ],
      [
        "Discuss causes and effects of the digital divide.",
        "Digital divide ၏ အကြောင်းရင်းနှင့် သက်ရောက်မှုများကို ဆွေးနွေးနိုင်ရန်။"
      ]
    ],
    "lessons": [
      [
        "Network types",
        "A network connects computers and other devices so they can communicate and share resources. A Local Area Network (LAN) covers a limited area such as a home, school or office. A Wide Area Network (WAN) connects networks over a larger geographical area. The internet is a global network of networks. Networks may use wired links such as Ethernet or wireless links such as Wi-Fi. The suitable type depends on distance, ownership, cost, performance and security requirements.",
        "Network သည် Computer နှင့် Device များကို ချိတ်ဆက်၍ ဆက်သွယ်/Resource မျှဝေစေသည်။ LAN သည် အိမ်၊ ကျောင်း၊ ရုံးကဲ့သို့ နေရာကန့်သတ်ထားသော ဧရိယာကို ဖုံးလွှမ်းသည်။ WAN သည် ပိုမိုကျယ်ပြန့်သော နေရာများရှိ Network များကို ချိတ်ဆက်သည်။ Internet သည် ကမ္ဘာတစ်ဝန်း Network of networks ဖြစ်သည်။ Wired (Ethernet) နှင့် Wireless (Wi-Fi) ချိတ်ဆက်မှုများ ရှိသည်။",
        "Classify each example as a LAN or WAN and state whether the connections are wired or wireless.",
        "ဥပမာတစ်ခုစီကို LAN/WAN ခွဲပါ။ Wired သို့မဟုတ် Wireless ဖြစ်ကြောင်း ဖော်ပြပါ။"
      ],
      [
        "Network layouts",
        "A network layout (topology) describes how devices are connected. In a star layout, devices connect to a central switch or access point; a central-device failure can affect the network. In a bus layout, devices share a main communication cable. In a ring layout, devices form a closed loop. Mesh layouts provide multiple paths between devices and can improve resilience, but need more links and management. Layout choice affects cost, reliability, installation and fault finding.",
        "Network layout (Topology) သည် Device များ ချိတ်ဆက်ထားပုံကို ဖော်ပြသည်။ Star တွင် Device များကို အလယ် Switch/Access point သို့ ချိတ်သည်။ Bus တွင် Main cable တစ်ခုကို မျှဝေသည်။ Ring တွင် စက်ဝိုင်းပုံ ချိတ်ဆက်သည်။ Mesh တွင် လမ်းကြောင်းများစွာ ရှိ၍ Resilience ပိုကောင်းနိုင်သော်လည်း ချိတ်ဆက်မှုနှင့် စီမံခန့်ခွဲမှု ပိုလိုသည်။",
        "Draw star, bus, ring and mesh layouts, label the central device or shared path, and identify one failure point.",
        "Star၊ Bus၊ Ring နှင့် Mesh diagram ဆွဲပါ။ Central device သို့မဟုတ် Shared path ကို Label တပ်ပြီး Failure point တစ်ခု သတ်မှတ်ပါ။"
      ],
      [
        "Advantages and disadvantages of networks",
        "Networks allow users to share files, printers, internet access and central storage. They support collaboration, communication, shared backup and central management. Disadvantages include set-up and maintenance costs, dependence on network availability, possible congestion, malware spreading between devices and security risks if access is poorly controlled. A server-based network can centralise services, while a peer-to-peer arrangement shares resources directly between computers. The best design balances sharing with security and resilience.",
        "Network သည် File၊ Printer၊ Internet access နှင့် Central storage များကို မျှဝေစေသည်။ Collaboration၊ Communication၊ Backup နှင့် Central management ကို ကူညီသည်။ သို့သော် Set-up/Maintenance cost၊ Network ပြတ်တောက်မှုအပေါ် မူတည်ခြင်း၊ Congestion၊ Malware ပြန့်ပွားခြင်းနှင့် Security အန္တရာယ်တို့ ရှိနိုင်သည်။",
        "For a school or small business, list three benefits and three risks, then suggest controls for the risks.",
        "ကျောင်း သို့မဟုတ် လုပ်ငန်းငယ်အတွက် အကျိုးကျေးဇူး ၃ ခု၊ အန္တရာယ် ၃ ခုရေးပြီး အန္တရာယ်လျှော့ချနည်း အကြံပြုပါ။"
      ],
      [
        "Network scenarios",
        "A network should be designed around the people, devices, distance, applications and budget involved. A school may need a wired backbone for fixed computers, wireless access for tablets, separate access for visitors and central storage for staff. A business with branches may use a WAN or secure internet connections to reach shared services. Consider bandwidth, reliability, physical layout, security, growth and support. A reasoned recommendation explains why the design fits the scenario.",
        "Network တည်ဆောက်ရာတွင် အသုံးပြုသူ၊ Device၊ အကွာအဝေး၊ Application နှင့် Budget ကို စဉ်းစားရသည်။ ကျောင်းတွင် Fixed computer များအတွက် Wired backbone၊ Tablet များအတွက် Wireless၊ Visitor အတွက် သီးခြား Access နှင့် Staff အတွက် Central storage လိုနိုင်သည်။ Branch များရှိသော လုပ်ငန်းတွင် WAN သို့မဟုတ် Secure internet connection လိုနိုင်သည်။",
        "Read a scenario, identify users and devices, estimate coverage and bandwidth, then recommend topology and access controls.",
        "Scenario ကိုဖတ်ပါ။ User/Device များ သတ်မှတ်ပါ။ Coverage နှင့် Bandwidth ခန့်မှန်းပါ။ Topology နှင့် Access control အကြံပြုပါ။"
      ],
      [
        "Open-source and proprietary software",
        "Open-source software makes its source code available under a licence that allows specified use, study, modification or redistribution. Proprietary software is controlled by its owner and normally restricts access to source code and copying or modification. Open source can encourage collaboration and customisation, but users still need to check licence terms and support arrangements. Proprietary software may offer vendor support and predictable product management, but can involve purchase costs and restrictions.",
        "Open-source software သည် Licence စည်းကမ်းအောက်တွင် Source code ကို လေ့လာ၊ ပြင်ဆင်၊ ပြန်လည်ဖြန့်ဝေနိုင်စေသည်။ Proprietary software သည် ပိုင်ရှင်က ထိန်းချုပ်ပြီး Source code ဝင်ရောက်ခွင့်နှင့် Copy/Modify လုပ်မှုကို ကန့်သတ်တတ်သည်။ Open-source သည် Collaboration/Customisation ကောင်းသော်လည်း Licence နှင့် Support ကို စစ်ရသည်။ Proprietary တွင် Vendor support ရနိုင်သော်လည်း ကုန်ကျစရိတ်နှင့် ကန့်သတ်ချက်ရှိနိုင်သည်။",
        "Compare two applications by source-code access, modification rights, support, price and licence conditions.",
        "Application နှစ်ခုကို Source code access၊ Modify right၊ Support၊ Price နှင့် Licence စည်းကမ်းအလိုက် နှိုင်းယှဉ်ပါ။"
      ],
      [
        "Types of software licence",
        "A software licence explains how software may be installed, used, copied, modified or shared. Commercial licences may restrict the number of users or devices. Freeware is supplied without a purchase price but may still be copyrighted and restricted. Shareware or trial software is offered for evaluation, sometimes with limits or a time period. Open-source licences define rights to inspect, change and redistribute code. A licence is not the same as copyright ownership; always read the conditions before sharing or modifying software.",
        "Software licence သည် Software ကို Install၊ Use၊ Copy၊ Modify သို့မဟုတ် Share လုပ်နိုင်သည့် စည်းကမ်းများကို ဖော်ပြသည်။ Commercial licence တွင် User/Device အရေအတွက် ကန့်သတ်နိုင်သည်။ Freeware သည် ဝယ်ယူခမရှိသော်လည်း Copyright နှင့် ကန့်သတ်ချက် ရှိနိုင်သည်။ Shareware/Trial သည် စမ်းသပ်သုံးရန် ပေးပြီး အချိန်/Feature ကန့်သတ်နိုင်သည်။",
        "Read a licence summary and classify what users may install, copy, change and redistribute.",
        "Licence summary ကိုဖတ်ပြီး User များ Install၊ Copy၊ Modify၊ Redistribute လုပ်ခွင့်ကို ခွဲခြားပါ။"
      ],
      [
        "Remote working",
        "Remote working allows employees to work away from the organisation’s main site, including from home or while travelling. It relies on suitable devices, secure network access, communication tools, shared files and collaboration software. Benefits can include flexible working, less travel and access to a wider workforce. Challenges include isolation, communication delays, equipment costs, data security and dependence on connectivity. Organisations should use secure authentication, backups, clear procedures and appropriate support.",
        "Remote working သည် ဝန်ထမ်းများကို ရုံးချုပ်ပြင်ပ၊ အိမ်မှ သို့မဟုတ် ခရီးသွားနေစဉ် အလုပ်လုပ်စေသည်။ သင့်လျော်သော Device၊ Secure network access၊ Communication tool၊ Shared file နှင့် Collaboration software လိုအပ်သည်။ Flexible working၊ ခရီးသွားချိန်လျှော့ခြင်း အကျိုးရှိသော်လည်း Isolation၊ ဆက်သွယ်မှုနှောင့်နှေးခြင်း၊ Security နှင့် Internet မရခြင်းတို့ ဖြစ်နိုင်သည်။",
        "Create a checklist for a remote worker covering equipment, connection, collaboration, security and support.",
        "Remote worker အတွက် Equipment၊ Connection၊ Collaboration၊ Security နှင့် Support ပါသော Checklist ဖန်တီးပါ။"
      ],
      [
        "Copyright and ethics",
        "Copyright protects original creative work such as software, photographs, music, writing and video. Ethical use means respecting creators, privacy, consent, licences and the impact of technology on others. Copying or sharing copyrighted material without permission may breach the owner’s rights. Plagiarism presents someone else’s work as your own. Ethical decisions should consider who created the content, what permission is granted, how credit is given and whether personal information is being shared appropriately.",
        "Copyright သည် Software၊ ဓာတ်ပုံ၊ သီချင်း၊ စာသားနှင့် Video ကဲ့သို့ မူရင်းဖန်တီးမှုများကို ကာကွယ်သည်။ Ethical use ဆိုသည်မှာ ဖန်တီးသူ၊ Privacy၊ Consent၊ Licence နှင့် နည်းပညာကြောင့် အခြားသူများအပေါ် သက်ရောက်မှုကို လေးစားခြင်းဖြစ်သည်။ ခွင့်ပြုချက်မရှိဘဲ Copyright ရှိသောအရာကို ကူးယူ/မျှဝေခြင်းသည် ပိုင်ရှင်၏ အခွင့်အရေးကို ချိုးဖောက်နိုင်သည်။",
        "Before using an image or clip, check its creator, licence, permission, attribution requirements and intended use.",
        "ပုံ/Clip အသုံးမပြုမီ ဖန်တီးသူ၊ Licence၊ ခွင့်ပြုချက်၊ Attribution လိုအပ်ချက်နှင့် ရည်ရွယ်အသုံးပြုမှုကို စစ်ပါ။"
      ],
      [
        "Cybercrime",
        "Cybercrime involves illegal activity using computers, networks or digital services. Examples include unauthorised access, phishing, identity theft, malware, ransomware, online fraud and denial-of-service attacks. People and organisations can reduce risk through strong unique passwords, multi-factor authentication, software updates, backups, careful handling of links and attachments, user awareness and access controls. Suspected incidents should be reported through appropriate channels rather than investigated by unsafe retaliation.",
        "Cybercrime သည် Computer၊ Network သို့မဟုတ် Digital service ကို အသုံးပြုသော တရားမဝင်လုပ်ရပ်ဖြစ်သည်။ Unauthorised access၊ Phishing၊ Identity theft၊ Malware၊ Ransomware၊ Online fraud နှင့် Denial-of-service attack တို့ ဥပမာဖြစ်သည်။ Password ခိုင်မာစွာသုံးခြင်း၊ MFA၊ Update၊ Backup၊ Link/Attachment စစ်ဆေးခြင်းနှင့် Access control ဖြင့် အန္တရာယ်လျှော့ချနိုင်သည်။",
        "For a suspicious email, identify warning signs and list safe actions before opening attachments or entering credentials.",
        "သံသယဖြစ်ဖွယ် Email တစ်ခုတွင် Warning sign များရှာပါ။ Attachment ဖွင့်ခြင်း သို့မဟုတ် Password ထည့်ခြင်းမပြုမီ လုံခြုံသောလုပ်ဆောင်ချက်များ ရေးပါ။"
      ],
      [
        "The digital divide",
        "The digital divide is the gap between people who can access and use digital technology effectively and those who cannot. Causes can include cost, location, internet infrastructure, disability access, age, skills, language and availability of suitable devices. Effects may include unequal access to education, employment, health services and public information. Responses can include affordable connectivity, accessible design, digital skills training, public access points, local-language resources and suitable devices.",
        "Digital divide သည် Digital technology ကို ဝင်ရောက်အသုံးပြုနိုင်ပြီး ထိရောက်စွာ သုံးနိုင်သူနှင့် မသုံးနိုင်သူအကြား ကွာဟချက်ဖြစ်သည်။ Cost၊ နေရာဒေသ၊ Internet infrastructure၊ Disability access၊ အသက်၊ Skill၊ ဘာသာစကားနှင့် Device ရရှိနိုင်မှုတို့ကြောင့် ဖြစ်နိုင်သည်။ ပညာရေး၊ အလုပ်အကိုင်၊ ကျန်းမာရေးဝန်ဆောင်မှုနှင့် သတင်းအချက်အလက် ရရှိမှု မညီမျှစေနိုင်သည်။",
        "Identify one cause, one effect and one practical action that could reduce the digital divide in a community.",
        "Community တစ်ခုရှိ Digital divide ၏ အကြောင်းရင်းတစ်ခု၊ သက်ရောက်မှုတစ်ခုနှင့် လျှော့ချနိုင်မည့် လုပ်ဆောင်ချက်တစ်ခု ဖော်ပြပါ။"
      ]
    ],
    "terms": [
      [
        "Network",
        "Connected devices that communicate and share resources.",
        "အပြန်အလှန်ဆက်သွယ်/မျှဝေရန် ချိတ်ဆက်ထားသော Device များ။"
      ],
      [
        "LAN",
        "A network covering a limited local area.",
        "ဒေသငယ်တစ်ခုကို ဖုံးလွှမ်းသော Network။"
      ],
      [
        "WAN",
        "A network covering a wide geographical area.",
        "ကျယ်ပြန့်သော ပထဝီဧရိယာကို ဖုံးလွှမ်းသော Network။"
      ],
      [
        "Topology",
        "The physical or logical layout of a network.",
        "Network ချိတ်ဆက်ထားပုံ။"
      ],
      [
        "Star topology",
        "Devices connect to a central device.",
        "Device များသည် အလယ် Device တစ်ခုသို့ ချိတ်သည်။"
      ],
      [
        "Bus topology",
        "Devices share a main communication cable.",
        "Device များ Main cable တစ်ခုကို မျှဝေသည်။"
      ],
      [
        "Ring topology",
        "Devices form a closed loop.",
        "Device များ စက်ဝိုင်းပုံ ချိတ်ထားသည်။"
      ],
      [
        "Mesh topology",
        "Devices have multiple paths between nodes.",
        "Node များအကြား လမ်းကြောင်းများစွာ ရှိသည်။"
      ],
      [
        "Ethernet",
        "A common wired networking technology.",
        "အသုံးများသော Wired networking နည်းပညာ။"
      ],
      [
        "Wi-Fi",
        "Wireless networking technology.",
        "ကြိုးမဲ့ Network နည်းပညာ။"
      ],
      [
        "Switch",
        "Connects devices within a LAN.",
        "LAN အတွင်း Device များ ချိတ်ဆက်ပေးသည်။"
      ],
      [
        "Router",
        "Forwards data between networks.",
        "Network များအကြား Data လမ်းကြောင်းပို့ပေးသည်။"
      ],
      [
        "Bandwidth",
        "Amount of data a connection can carry per unit time.",
        "အချိန်တစ်ယူနစ်အတွင်း ပို့နိုင်သော Data ပမာဏ။"
      ],
      [
        "Server",
        "A computer or service providing resources to clients.",
        "Client များအတွက် Resource ပေးသော Computer/Service။"
      ],
      [
        "Client",
        "A device or program requesting a service.",
        "Service တောင်းခံသော Device/Program။"
      ],
      [
        "Peer-to-peer",
        "A network model where devices share directly.",
        "Device များ တိုက်ရိုက် Resource မျှဝေသော Model။"
      ],
      [
        "Open-source software",
        "Software with source code available under its licence.",
        "Licence အောက်တွင် Source code ရနိုင်သော Software။"
      ],
      [
        "Proprietary software",
        "Software controlled by its owner.",
        "ပိုင်ရှင်က ထိန်းချုပ်သော Software။"
      ],
      [
        "Software licence",
        "Rules governing use, copying and modification.",
        "အသုံးပြု/ကူးယူ/ပြင်ဆင်ခွင့် စည်းကမ်းများ။"
      ],
      [
        "Freeware",
        "Software supplied without a purchase price.",
        "ဝယ်ယူခမရှိဘဲ ပေးသော Software။"
      ],
      [
        "Shareware",
        "Software offered for evaluation or limited use.",
        "စမ်းသပ်/ကန့်သတ်သုံးရန် ပေးသော Software။"
      ],
      [
        "Remote working",
        "Working away from the main workplace.",
        "အဓိကအလုပ်နေရာပြင်ပမှ အလုပ်လုပ်ခြင်း။"
      ],
      [
        "Copyright",
        "Legal protection for original creative work.",
        "မူရင်းဖန်တီးမှုကို ဥပဒေအရ ကာကွယ်မှု။"
      ],
      [
        "Plagiarism",
        "Presenting another person’s work as your own.",
        "အခြားသူ၏အလုပ်ကို ကိုယ့်အလုပ်ဟု ဖော်ပြခြင်း။"
      ],
      [
        "Consent",
        "Permission given by a person.",
        "လူတစ်ဦးထံမှ ခွင့်ပြုချက်။"
      ],
      [
        "Cybercrime",
        "Illegal activity using digital systems.",
        "Digital system ကို အသုံးပြုသော တရားမဝင်လုပ်ရပ်။"
      ],
      [
        "Phishing",
        "Fraudulent messages designed to steal information.",
        "အချက်အလက်ခိုးယူရန် လိမ်လည်ပို့သော Message။"
      ],
      [
        "Malware",
        "Software designed to harm or misuse a system.",
        "System ကို ထိခိုက်/အလွဲသုံးစားလုပ်ရန် ရေးထားသော Software။"
      ],
      [
        "Ransomware",
        "Malware that locks or encrypts data for ransom.",
        "Data ကို Lock/Encrypt လုပ်ပြီး ငွေတောင်းသော Malware။"
      ],
      [
        "Authentication",
        "Checking the identity of a user.",
        "အသုံးပြုသူ၏ Identity စစ်ဆေးခြင်း။"
      ],
      [
        "Digital divide",
        "Unequal access to digital technology and skills.",
        "Digital နည်းပညာနှင့် Skill ရရှိမှု မညီမျှခြင်း။"
      ],
      [
        "Digital literacy",
        "Skills to use technology safely and effectively.",
        "နည်းပညာကို လုံခြုံထိရောက်စွာ သုံးနိုင်သော Skill။"
      ],
      [
        "Accessibility",
        "Design that enables people with different needs to use a service.",
        "လိုအပ်ချက်မတူသူများ သုံးနိုင်အောင် ပြုလုပ်ထားမှု။"
      ],
      [
        "Encryption",
        "Transforming data so only authorised parties can read it.",
        "ခွင့်ပြုထားသူသာ ဖတ်နိုင်ရန် Data ပြောင်းလဲကာကွယ်ခြင်း။"
      ]
    ],
    "examples": [
      "A school may use wired Ethernet for fixed desktop rooms and Wi-Fi for tablets.",
      "A mesh network can provide alternative paths if one connection fails.",
      "An affordable public access point and digital skills training can help reduce the digital divide."
    ],
    "examplesMy": [
      "ကျောင်းတွင် Desktop အခန်းအတွက် Ethernet၊ Tablet များအတွက် Wi-Fi သုံးနိုင်သည်။",
      "Mesh network တွင် Connection တစ်ခု ပျက်လျှင် အခြားလမ်းကြောင်းဖြင့် ဆက်သွယ်နိုင်သည်။",
      "Public access point နှင့် Digital skill training ဖြင့် Digital divide လျှော့ချနိုင်သည်။"
    ],
    "table": {
      "caption": "Network and software choice matrix",
      "headers": [
        "Choice",
        "Strength",
        "Limitation / risk"
      ],
      "rows": [
        [
          "LAN",
          "Fast local sharing and central management",
          "Limited geographical area"
        ],
        [
          "WAN",
          "Connects distant locations",
          "More complex and costly"
        ],
        [
          "Star topology",
          "Easy to add devices and troubleshoot links",
          "Central switch failure affects many devices"
        ],
        [
          "Mesh topology",
          "Multiple paths and resilience",
          "More cabling, radio planning and management"
        ],
        [
          "Open source",
          "Inspect, modify and adapt code under licence",
          "Support and compatibility must be planned"
        ],
        [
          "Proprietary",
          "Vendor support and managed releases",
          "Restrictions and purchase/licence costs"
        ]
      ]
    },
    "activities": [
      [
        "Network layout drawing",
        "Draw star, bus, ring and mesh networks for a small classroom and label devices.",
        "စာသင်ခန်းငယ်အတွက် Star၊ Bus၊ Ring၊ Mesh network များ ဆွဲပြီး Device များ Label တပ်ပါ။"
      ],
      [
        "Software licence review",
        "Compare the permissions and restrictions of an open-source and a proprietary application.",
        "Open-source နှင့် Proprietary application တစ်ခုစီ၏ Permission/Restriction ကို နှိုင်းယှဉ်ပါ။"
      ],
      [
        "Digital inclusion plan",
        "Design a simple plan that helps a local community access devices, connectivity and digital skills.",
        "ဒေသခံ Community အတွက် Device၊ Internet နှင့် Digital skill ရရှိရေး Plan တစ်ခု ရေးပါ။"
      ]
    ],
    "slides": [
      "Network types: LAN, WAN and the internet",
      "Network topology: star, bus, ring and mesh",
      "Benefits, limitations and security considerations",
      "Choose a network for a school or business scenario",
      "Open-source and proprietary software",
      "Software licence types and permissions",
      "Remote working: tools, benefits and risks",
      "Copyright, ethics and consent",
      "Cybercrime examples and prevention",
      "The digital divide and inclusion"
    ],
    "essays": [
      [
        "Recommend a network design for a school with desktop computers, tablets, staff files and visitors.",
        "A school could use a wired Ethernet backbone and star topology for fixed desktops, Wi-Fi access points for tablets and a separate guest network. Staff files should use controlled central storage with permissions and backup. The design should consider coverage, bandwidth, security and future expansion.",
        [
          "Ethernet",
          "star topology",
          "Wi-Fi",
          "guest network",
          "permissions",
          "backup"
        ]
      ],
      [
        "Compare open-source and proprietary software for a small organisation.",
        "Open-source software may allow inspection and modification under its licence and can reduce purchase cost, but support and compatibility need checking. Proprietary software may provide vendor support and controlled updates but can have licence costs and restrictions. The organisation should compare requirements and licence terms.",
        [
          "source code",
          "modify",
          "licence",
          "support",
          "compatibility",
          "cost"
        ]
      ],
      [
        "Explain three ways an organisation can reduce cybercrime risks.",
        "Use strong unique passwords and multi-factor authentication, install updates, train staff to identify phishing, restrict access permissions, keep secure backups and report suspicious incidents.",
        [
          "strong passwords",
          "multi-factor",
          "updates",
          "phishing",
          "permissions",
          "backups"
        ]
      ],
      [
        "Discuss causes and effects of the digital divide and suggest practical solutions.",
        "The digital divide can result from device cost, poor connectivity, location, disability access, skills and language barriers. It can limit education, work and access to services. Affordable internet, public access locations, accessible design, local-language help and skills training can reduce the gap.",
        [
          "cost",
          "connectivity",
          "skills",
          "education",
          "services",
          "affordable",
          "accessible",
          "training"
        ]
      ]
    ]
  },
  {
    "id": 5,
    "title": "Databases",
    "myTitle": "Database စနစ်များ",
    "range": "Student Book pp. 98–120",
    "accent": "red",
    "overview": "This unit develops database skills from data types and table design through setting up a database, data-entry forms, reports, relational tables, queries, advanced reports and problem solving. It introduces practical database structures and how to retrieve useful information accurately.",
    "overviewMy": "ဤယူနစ်တွင် Data type နှင့် Table design မှစ၍ Database တည်ဆောက်ခြင်း၊ Data-entry form၊ Report၊ Relational table၊ Query၊ Advanced report နှင့် Problem solving အထိ လေ့လာမည်။ Data များကို စနစ်တကျ သိမ်းဆည်းပြီး တိကျစွာ ပြန်လည်ရယူနိုင်ပုံကို လေ့ကျင့်မည်။",
    "objectives": [
      [
        "Explain databases, tables, records, fields and common data types.",
        "Database၊ Table၊ Record၊ Field နှင့် Data type များကို ရှင်းပြနိုင်ရန်။"
      ],
      [
        "Set up a database with appropriate field names, data types and keys.",
        "သင့်လျော်သော Field name၊ Data type နှင့် Key များဖြင့် Database တည်ဆောက်နိုင်ရန်။"
      ],
      [
        "Create data-entry forms and produce useful reports.",
        "Data-entry form ဖန်တီးပြီး အသုံးဝင်သော Report ထုတ်နိုင်ရန်။"
      ],
      [
        "Explain relational databases and how tables are linked.",
        "Relational database နှင့် Table ချိတ်ဆက်ပုံ ရှင်းပြနိုင်ရန်။"
      ],
      [
        "Write and interpret database queries and advanced reports.",
        "Database query ရေး/ဖတ်ပြီး Advanced report ဖန်တီးနိုင်ရန်။"
      ]
    ],
    "lessons": [
      [
        "Databases and data types",
        "A database is an organised collection of related data. A table stores information about one type of thing, a record is one row describing one item or person, and a field is one category of information in a record. Common field types include text, alphanumeric, integer, decimal/real, date, Boolean and currency. Choosing suitable data types improves validation, sorting, searching and storage. A primary key uniquely identifies each record.",
        "Database သည် ဆက်စပ်သော Data များကို စနစ်တကျ စုစည်းထားခြင်းဖြစ်သည်။ Table တစ်ခုသည် အရာဝတ္ထုအမျိုးအစားတစ်ခု၏ အချက်အလက် သိမ်းသည်။ Record သည် Row တစ်ခုဖြစ်ပြီး လူ/ပစ္စည်းတစ်ခုအကြောင်း ဖော်ပြသည်။ Field သည် Record ထဲရှိ အချက်အလက်အမျိုးအစားတစ်ခုဖြစ်သည်။ Text၊ Integer၊ Real၊ Date၊ Boolean နှင့် Currency စသော Data type များ ရှိသည်။",
        "Choose fields for a student or product table, assign a suitable data type and identify a unique primary key.",
        "Student သို့မဟုတ် Product table အတွက် Field များရွေးပါ။ သင့်လျော်သော Data type ပေးပြီး Unique primary key သတ်မှတ်ပါ။"
      ],
      [
        "Setting up a database",
        "Setting up a database involves identifying the purpose, entities, fields and relationships, then choosing suitable data types and keys. Field names should be meaningful and consistent. A primary key must uniquely identify each record and should not be blank or duplicated. Validation rules can restrict values such as a date range or a number greater than zero. A well-designed table avoids unnecessary repetition and keeps data accurate.",
        "Database တည်ဆောက်ရာတွင် ရည်ရွယ်ချက်၊ Entity၊ Field နှင့် Relationship များ သတ်မှတ်ပြီး Data type နှင့် Key ရွေးရသည်။ Field name များသည် အဓိပ္ပာယ်ရှိပြီး တစ်သမတ်တည်း ဖြစ်ရမည်။ Primary key သည် Record တစ်ခုစီကို ထူးခြားစွာ သတ်မှတ်ရမည်။ Validation rule ဖြင့် Date range သို့မဟုတ် သုညထက်ကြီးသော Number ကဲ့သို့ တန်ဖိုးများကို ကန့်သတ်နိုင်သည်။",
        "Plan entities and fields, set a primary key, choose field types, add validation and enter a small sample of records.",
        "Entity/Field စီစဉ်ပါ။ Primary key သတ်မှတ်ပါ။ Field type ရွေးပါ။ Validation ထည့်ပြီး Record နမူနာ ထည့်ပါ။"
      ],
      [
        "Creating a data entry form",
        "A data-entry form provides a user-friendly way to add or edit records without working directly in the table grid. Forms can use labels, text boxes, drop-down lists, date pickers and command buttons. A good form groups related fields, uses clear instructions and applies validation to prevent invalid entries. Forms can reduce errors by controlling how data is entered. The underlying table still stores the records.",
        "Data-entry form သည် Table grid ကို တိုက်ရိုက်မကိုင်တွယ်ဘဲ Record ထည့်/ပြင်ရန် အသုံးပြုရလွယ်သော Interface ဖြစ်သည်။ Label၊ Text box၊ Drop-down list၊ Date picker နှင့် Button များ ပါဝင်နိုင်သည်။ Field ဆက်စပ်မှုအလိုက် အုပ်စုဖွဲ့ပြီး Instruction ရှင်းလင်းစေကာ Validation ထည့်သင့်သည်။ Form သည် Data ထည့်ပုံကို ထိန်းချုပ်၍ အမှားလျှော့ချပေးသည်။",
        "Create a form with clearly labelled controls, required fields, a suitable drop-down and a validation message.",
        "Label တပ်ထားသော Control များ၊ မဖြစ်မနေဖြည့်ရမည့် Field၊ Drop-down နှင့် Validation message ပါသော Form ဖန်တီးပါ။"
      ],
      [
        "Data entry and database reports",
        "Accurate data entry is essential because errors affect searches, calculations and reports. Validation can check type, range, length or presence. A report selects and organises information from one or more tables or queries into a readable format. Reports can group records, sort results, include totals and display headings or page numbers. Before producing a report, check the source data, filters, selected fields and sort order.",
        "Data မှန်ကန်စွာ ထည့်သွင်းခြင်းသည် အရေးကြီးသည်။ အမှားများသည် Search၊ Calculation နှင့် Report ကို ထိခိုက်စေသည်။ Validation သည် Type၊ Range၊ Length သို့မဟုတ် Required field စစ်နိုင်သည်။ Report သည် Table/Query များမှ Data ရွေးချယ်စီစဉ်၍ ဖတ်ရလွယ်သောပုံစံ ထုတ်ပေးသည်။ Group၊ Sort၊ Total၊ Heading နှင့် Page number များ ထည့်နိုင်သည်။",
        "Enter sample records, test validation rules, create a query and produce a grouped report with a total.",
        "Record နမူနာထည့်ပါ။ Validation စမ်းပါ။ Query ဖန်တီးပြီး Group နှင့် Total ပါသော Report ထုတ်ပါ။"
      ],
      [
        "Relational databases",
        "A relational database stores related information in separate tables and links them using keys. A primary key uniquely identifies a record in its own table. A foreign key stores a value that refers to a primary key in another table. For example, a Customers table may connect to an Orders table through CustomerID. Relationships reduce repeated data and improve consistency. Referential integrity helps ensure that a related record refers to a valid record.",
        "Relational database သည် ဆက်စပ် Data များကို Table သီးခြားများတွင် သိမ်းပြီး Key ဖြင့် ချိတ်ဆက်သည်။ Primary key သည် မိမိ Table အတွင်း Record တစ်ခုကို ထူးခြားစွာ သတ်မှတ်သည်။ Foreign key သည် အခြား Table ရှိ Primary key ကို ရည်ညွှန်းသည်။ ဥပမာ Customers နှင့် Orders ကို CustomerID ဖြင့် ချိတ်နိုင်သည်။ ထပ်နေသော Data လျော့ပြီး Consistency ပိုကောင်းစေသည်။",
        "Draw two related tables, mark the primary and foreign keys, and show a one-to-many relationship.",
        "ဆက်စပ် Table နှစ်ခု ဆွဲပါ။ Primary/Foreign key များကို သတ်မှတ်ပြီး One-to-many relationship ပြပါ။"
      ],
      [
        "Database queries",
        "A query asks a database to return records that meet specified criteria. It can select fields, filter rows, sort results and combine conditions. A query may use operators such as =, <, >, <=, >= and AND/OR. SQL (Structured Query Language) is a common language for working with relational databases. A SELECT query identifies the fields and table; WHERE restricts records; ORDER BY sorts the result. Criteria must match the field type and intended question.",
        "Query သည် သတ်မှတ်ထားသော Criteria ကိုက်ညီသော Record များကို Database မှ ပြန်ရယူရန် အသုံးပြုသည်။ Field ရွေးခြင်း၊ Row filter လုပ်ခြင်း၊ Sort လုပ်ခြင်းနှင့် Condition ပေါင်းစပ်ခြင်း ပြုလုပ်နိုင်သည်။ SQL သည် Relational database များနှင့် လုပ်ဆောင်ရာတွင် အသုံးများသော Language ဖြစ်သည်။ SELECT သည် Field/Table ရွေးပြီး WHERE က Record ကန့်သတ်ကာ ORDER BY က စီစဉ်သည်။",
        "Write a SELECT query, add a WHERE condition, sort by a selected field and check that the result answers the question.",
        "SELECT query ရေးပါ။ WHERE condition ထည့်ပါ။ Field တစ်ခုအလိုက် Sort လုပ်ပြီး Result သည် မေးခွန်းကို ဖြေကြောင်း စစ်ပါ။"
      ],
      [
        "Advanced reports",
        "Advanced reports combine fields from related tables or queries and may include grouping, calculated fields, summaries, sorting, filters and parameter prompts. A calculated field performs an operation such as quantity multiplied by unit price. Aggregate functions such as SUM, COUNT, MIN, MAX and AVG summarise records. A well-designed report has a clear title, meaningful headings, consistent number formats and only the information needed by its audience.",
        "Advanced report သည် ဆက်စပ် Table/Query များမှ Field များ ပေါင်းစပ်နိုင်ပြီး Grouping၊ Calculated field၊ Summary၊ Sort၊ Filter နှင့် Parameter prompt များ ပါနိုင်သည်။ Calculated field သည် Quantity × Unit price ကဲ့သို့ တွက်ချက်နိုင်သည်။ SUM၊ COUNT၊ MIN၊ MAX နှင့် AVG တို့က Record များကို အကျဉ်းချုပ်ပေးသည်။ Report တွင် Title၊ Heading၊ Number format တစ်သမတ်တည်းနှင့် Audience အတွက် လိုအပ်သောအချက်များသာ ပါသင့်သည်။",
        "Create a report that groups records by category and calculates a total or average for each group.",
        "Category အလိုက် Record များ Group လုပ်ပြီး Group တစ်ခုစီအတွက် Total သို့မဟုတ် Average တွက်သော Report ဖန်တီးပါ။"
      ],
      [
        "Advanced database skills and problem solving",
        "Database problem solving involves understanding the question, identifying the required records and fields, designing criteria, checking relationships, testing the query and interpreting the results. Complex tasks may require multiple conditions, calculated fields, joins between related tables or more than one report. Work methodically: define the required output, inspect the data structure, build a simple query first, add complexity gradually and verify sample results.",
        "Database problem solving တွင် မေးခွန်းနားလည်ခြင်း၊ လိုအပ်သော Record/Field ရွေးခြင်း၊ Criteria သတ်မှတ်ခြင်း၊ Relationship စစ်ခြင်း၊ Query စမ်းသပ်ခြင်းနှင့် Result အဓိပ္ပာယ်ဖော်ခြင်း ပါဝင်သည်။ ရှုပ်ထွေးသော Task များတွင် Condition များစွာ၊ Calculated field၊ Table join သို့မဟုတ် Report အများအပြား လိုနိုင်သည်။ အရင်ဆုံး ရိုးရှင်းသော Query တည်ဆောက်ပြီး တဖြည်းဖြည်း ချဲ့ထွင်သင့်သည်။",
        "Translate a real question into fields, conditions, relationships and output; test the query with sample records before finalising the report.",
        "လက်တွေ့မေးခွန်းကို Field၊ Condition၊ Relationship နှင့် Output အဖြစ် ခွဲပါ။ Report မပြီးမီ Record နမူနာများဖြင့် Query စမ်းပါ။"
      ]
    ],
    "terms": [
      [
        "Database",
        "An organised collection of related data.",
        "ဆက်စပ် Data များ စနစ်တကျ စုစည်းထားခြင်း။"
      ],
      [
        "Table",
        "A structure holding records about one entity.",
        "Entity တစ်ခုအကြောင်း Record များ သိမ်းသော ဖွဲ့စည်းပုံ။"
      ],
      [
        "Record",
        "A row describing one item or person.",
        "အရာဝတ္ထု/လူတစ်ဦးကို ဖော်ပြသော Row။"
      ],
      [
        "Field",
        "A category or attribute in a record.",
        "Record တစ်ခုအတွင်းရှိ အချက်အလက်အမျိုးအစား။"
      ],
      [
        "Text data type",
        "A field for letters, words and text characters.",
        "စာလုံး/စာသား သိမ်းသော Data type။"
      ],
      [
        "Integer",
        "A whole number without a fractional part.",
        "ဒဿမပိုင်းမပါသော ကိန်းပြည့်။"
      ],
      [
        "Real / decimal",
        "A numeric value that can include a fractional part.",
        "ဒဿမပိုင်းပါနိုင်သော ကိန်းဂဏန်း။"
      ],
      [
        "Date data type",
        "Stores calendar dates.",
        "ရက်စွဲ သိမ်းသော Data type။"
      ],
      [
        "Boolean",
        "A value that is true or false.",
        "True/False တန်ဖိုး။"
      ],
      [
        "Primary key",
        "A field that uniquely identifies a record.",
        "Record တစ်ခုကို ထူးခြားစွာ သတ်မှတ်သော Field။"
      ],
      [
        "Foreign key",
        "A field referring to a key in another table.",
        "အခြား Table ၏ Key ကို ရည်ညွှန်းသော Field။"
      ],
      [
        "Validation",
        "Rules that check whether entered data is acceptable.",
        "ထည့်သွင်းသော Data လက်ခံနိုင်မှု စစ်သော စည်းကမ်း။"
      ],
      [
        "Data entry form",
        "A user interface for entering or editing records.",
        "Record ထည့်/ပြင်ရန် Interface။"
      ],
      [
        "Query",
        "A request to retrieve records matching criteria.",
        "Criteria ကိုက်ညီသော Record များ ပြန်ရယူရန် တောင်းဆိုမှု။"
      ],
      [
        "Criteria",
        "Conditions used to select records.",
        "Record ရွေးချယ်ရန် အသုံးပြုသော Condition။"
      ],
      [
        "Sort order",
        "The order in which results are arranged.",
        "Result များ စီစဉ်ထားသော အစီအစဉ်။"
      ],
      [
        "Filter",
        "A rule that shows only matching records.",
        "ကိုက်ညီသော Record များသာ ပြသစေသော Rule။"
      ],
      [
        "Report",
        "A formatted presentation of database information.",
        "Database အချက်အလက်ကို စနစ်တကျ ဖော်ပြထားသော Report။"
      ],
      [
        "Relational database",
        "A database using related tables linked by keys.",
        "Key များဖြင့် ချိတ်ထားသော Table များပါ Database။"
      ],
      [
        "Relationship",
        "A link between records in different tables.",
        "Table မတူသော Record များအကြား ဆက်နွယ်မှု။"
      ],
      [
        "One-to-many",
        "One record in a table links to several records in another.",
        "Table တစ်ခုမှ Record တစ်ခုက အခြား Table ရှိ Record များစွာနှင့် ချိတ်ဆက်မှု။"
      ],
      [
        "Referential integrity",
        "Rules that keep relationships valid.",
        "Relationship များ မှန်ကန်နေစေသော စည်းကမ်း။"
      ],
      [
        "SQL",
        "Structured Query Language for relational databases.",
        "Relational database ကို Query လုပ်သော Language။"
      ],
      [
        "SELECT",
        "SQL command choosing fields or expressions.",
        "SQL တွင် Field/Expression ရွေးသော Command။"
      ],
      [
        "FROM",
        "SQL clause identifying the source table.",
        "Source table ကို သတ်မှတ်သော SQL clause။"
      ],
      [
        "WHERE",
        "SQL clause filtering records by criteria.",
        "Criteria အလိုက် Record filter လုပ်သော SQL clause။"
      ],
      [
        "ORDER BY",
        "SQL clause sorting query results.",
        "Query result များ စီသော SQL clause။"
      ],
      [
        "Aggregate function",
        "A function summarising multiple records.",
        "Record များစွာကို အကျဉ်းချုပ်သော Function။"
      ],
      [
        "SUM",
        "Adds numeric values.",
        "ကိန်းဂဏန်းများ ပေါင်းသော Function။"
      ],
      [
        "COUNT",
        "Counts records or values.",
        "Record/Value အရေအတွက် ရေတွက်သော Function။"
      ],
      [
        "AVG",
        "Calculates the arithmetic mean.",
        "ပျမ်းမျှတန်ဖိုး တွက်သော Function။"
      ],
      [
        "Join",
        "Combines related records from multiple tables.",
        "Table များမှ ဆက်စပ် Record များ ပေါင်းစည်းခြင်း။"
      ],
      [
        "Calculated field",
        "A field whose value is calculated from other data.",
        "အခြား Data များမှ တွက်ချက်ထားသော Field။"
      ],
      [
        "Parameter query",
        "A query that asks the user for a value or criterion.",
        "User ထံမှ Value/Criteria မေးသော Query။"
      ]
    ],
    "examples": [
      "A student table may use StudentID as its primary key and store name, date of birth and class.",
      "An Orders table can use CustomerID as a foreign key to connect to Customers.",
      "A report can group sales by product and calculate total quantity or revenue."
    ],
    "examplesMy": [
      "Student table တွင် StudentID ကို Primary key အဖြစ် သုံးပြီး Name၊ DOB နှင့် Class သိမ်းနိုင်သည်။",
      "Orders table သည် CustomerID ကို Foreign key အဖြစ် သုံး၍ Customers table နှင့် ချိတ်နိုင်သည်။",
      "Report တစ်ခုသည် Product အလိုက် Sales ကို Group လုပ်ပြီး Quantity/Revenue တွက်နိုင်သည်။"
    ],
    "table": {
      "caption": "Database structure and SQL query pattern",
      "headers": [
        "Element",
        "Purpose",
        "Example"
      ],
      "rows": [
        [
          "Table",
          "Stores one entity",
          "Students"
        ],
        [
          "Record",
          "One row of related fields",
          "StudentID 1042"
        ],
        [
          "Primary key",
          "Unique identifier",
          "StudentID"
        ],
        [
          "Foreign key",
          "Links a related table",
          "Orders.CustomerID"
        ],
        [
          "SELECT",
          "Choose fields",
          "SELECT Name, Class"
        ],
        [
          "WHERE",
          "Filter records",
          "WHERE Class = \"9A\""
        ],
        [
          "ORDER BY",
          "Sort results",
          "ORDER BY Name ASC"
        ]
      ]
    },
    "activities": [
      [
        "Design a table",
        "Design a small library database with Books and Borrowers tables, data types and keys.",
        "Books နှင့် Borrowers Table ပါသော Library database ကို Data type/Key များဖြင့် တည်ဆောက်ပါ။"
      ],
      [
        "Query writing",
        "Write SQL to show products costing less than a chosen price, ordered from cheapest to most expensive.",
        "သတ်မှတ်စျေးနှုန်းအောက်ရှိ Product များကို ဈေးအနည်းဆုံးမှ အများဆုံးအထိ ပြသသော SQL ရေးပါ။"
      ],
      [
        "Report creation",
        "Create a grouped report for a small club showing members by membership type and total fees.",
        "အသင်းဝင်များကို Membership type အလိုက် Group လုပ်ပြီး Fee စုစုပေါင်း ပြသော Report ဖန်တီးပါ။"
      ]
    ],
    "slides": [
      "Database concepts: table, record, field and data type",
      "Plan fields, data types, primary keys and validation",
      "Designing and creating a data-entry form",
      "Data entry, validation and reports",
      "Relational tables and foreign keys",
      "SQL queries: SELECT, WHERE and ORDER BY",
      "Advanced reports and aggregate calculations",
      "Advanced database skills and problem solving"
    ],
    "essays": [
      [
        "Explain why a relational database may be better than storing all information in one large table.",
        "Related tables reduce repeated data, improve consistency and allow information to be linked using primary and foreign keys. For example, customer details can be stored once and connected to many orders through CustomerID.",
        [
          "reduce repetition",
          "consistency",
          "primary key",
          "foreign key",
          "CustomerID"
        ]
      ],
      [
        "Describe how a data-entry form and validation rules can improve database accuracy.",
        "A form presents clear labelled controls and guides users through data entry. Validation can check data types, required fields and allowed ranges, preventing some incorrect values from being stored.",
        [
          "labelled controls",
          "data entry",
          "validation",
          "data type",
          "required",
          "range"
        ]
      ],
      [
        "Write and explain a query that lists products of a selected category and sorts them by price.",
        "SELECT ProductName, Price FROM Products WHERE Category = \"Audio\" ORDER BY Price ASC; SELECT chooses fields, FROM identifies the table, WHERE filters the category and ORDER BY sorts the price from low to high.",
        [
          "SELECT",
          "FROM",
          "WHERE",
          "filter",
          "ORDER BY",
          "ascending"
        ]
      ],
      [
        "Explain how an advanced report can help a manager make a decision.",
        "An advanced report can combine related tables, group records by category, calculate totals or averages and present the information with clear headings. A manager can compare categories, identify trends and make decisions based on accurate data.",
        [
          "related tables",
          "group",
          "totals",
          "averages",
          "compare",
          "decisions"
        ]
      ]
    ]
  },
  {
    "id": 6,
    "title": "Web authoring",
    "myTitle": "Web page ဖန်တီးခြင်း",
    "range": "Student Book pp. 122–142",
    "accent": "violet",
    "overview": "This unit introduces HTML and web pages, HTML structure and basic elements, designing and testing a simple page, WYSIWYG authoring tools, multimedia content and the planning and construction of multi-page websites.",
    "overviewMy": "ဤယူနစ်တွင် HTML နှင့် Web page မိတ်ဆက်၊ HTML structure နှင့် Basic element များ၊ Web page design/testing၊ WYSIWYG tool၊ Multimedia content နှင့် Multi-page website ကို စီစဉ်/တည်ဆောက်ခြင်းတို့ကို လေ့လာမည်။",
    "objectives": [
      [
        "Explain how HTML is used to structure web pages.",
        "Web page structure ဖန်တီးရန် HTML အသုံးပြုပုံ ရှင်းပြနိုင်ရန်။"
      ],
      [
        "Create basic HTML elements with correctly nested tags and attributes.",
        "Tag နှင့် Attribute များကို မှန်ကန်စွာ ထည့်သွင်းပြီး HTML element များ ဖန်တီးနိုင်ရန်။"
      ],
      [
        "Design and test a simple web page for a target audience.",
        "Target audience အတွက် Web page တစ်ခု ဒီဇိုင်း/စမ်းသပ်နိုင်ရန်။"
      ],
      [
        "Compare code-based and WYSIWYG authoring tools.",
        "Code-based နှင့် WYSIWYG authoring tool များကို နှိုင်းယှဉ်နိုင်ရန်။"
      ],
      [
        "Add multimedia and build a consistent multi-page website with working navigation.",
        "Multimedia ထည့်ပြီး Navigation အလုပ်လုပ်သော Multi-page website တည်ဆောက်နိုင်ရန်။"
      ]
    ],
    "lessons": [
      [
        "An introduction to HTML",
        "HTML (HyperText Markup Language) is used to describe the structure and meaning of content on a web page. HTML uses elements written with tags, commonly including an opening tag, content and a closing tag. A browser reads the HTML and renders the page. HTML is a markup language rather than a general-purpose programming language: it marks headings, paragraphs, links, images, lists and other content. CSS is commonly used to control presentation and JavaScript can add interaction.",
        "HTML (HyperText Markup Language) သည် Web page ပေါ်ရှိ Content ၏ Structure နှင့် အဓိပ္ပာယ်ကို ဖော်ပြရန် အသုံးပြုသည်။ HTML တွင် Tag များဖြင့် Element ဖွဲ့စည်းပြီး Opening tag၊ Content နှင့် Closing tag ပါဝင်တတ်သည်။ Browser က HTML ကို ဖတ်ပြီး Page အဖြစ် ပြသသည်။ HTML သည် Markup language ဖြစ်ပြီး CSS က ပုံစံချခြင်း၊ JavaScript က Interaction ထည့်ခြင်းတို့အတွက် အသုံးများသည်။",
        "Create a simple file with a document structure, one heading, one paragraph and one link, then open it in a browser.",
        "Document structure၊ Heading တစ်ခု၊ Paragraph တစ်ခုနှင့် Link တစ်ခု ပါသော HTML file ဖန်တီးပြီး Browser ဖြင့် ဖွင့်ပါ။"
      ],
      [
        "HTML basics",
        "A basic HTML document normally includes <!DOCTYPE html>, an html element, a head section containing metadata and a title, and a body containing visible content. Headings use h1 to h6, paragraphs use p, links use a with an href attribute, and images use img with a src and alternative text. Elements should be nested correctly. Attribute values are placed inside quotation marks. Some elements, such as img, do not have a separate closing tag in HTML.",
        "HTML document တစ်ခုတွင် <!DOCTYPE html>၊ html element၊ Metadata/Title ပါသော head နှင့် မြင်ရသော Content ပါသော body ရှိတတ်သည်။ Heading အတွက် h1–h6၊ Paragraph အတွက် p၊ Link အတွက် href ပါသော a၊ Image အတွက် src နှင့် Alt text ပါသော img ကို အသုံးပြုသည်။ Element များ Nesting မှန်ကန်ရမည်။ Attribute value ကို Quotation mark ထဲ ထည့်သည်။",
        "Write the document skeleton, add a title, heading, paragraph, link and image with useful alt text.",
        "Document skeleton ရေးပါ။ Title၊ Heading၊ Paragraph၊ Link နှင့် သင့်လျော်သော Alt text ပါသော Image ထည့်ပါ။"
      ],
      [
        "Designing a simple web page",
        "A web page should be designed around its purpose and target audience. Plan the content hierarchy, headings, navigation, colours, fonts, images, whitespace and layout before coding. Consistent spacing and readable contrast make the page easier to use. A simple page may contain a header, navigation area, main content, side content and footer. Design should support the content rather than distract from it. Responsive layouts should adapt to different screen widths.",
        "Web page ကို ရည်ရွယ်ချက်နှင့် Target audience အပေါ် မူတည်၍ ဒီဇိုင်းလုပ်ရသည်။ Code မရေးမီ Content hierarchy၊ Heading၊ Navigation၊ Colour၊ Font၊ Image၊ Whitespace နှင့် Layout ကို စီစဉ်ပါ။ Spacing တစ်သမတ်တည်းဖြစ်ခြင်းနှင့် Contrast ကောင်းခြင်းတို့က အသုံးပြုရလွယ်စေသည်။ Header၊ Navigation၊ Main၊ Sidebar နှင့် Footer ပါနိုင်သည်။",
        "Sketch a wireframe, label each page region, choose a consistent style and explain how it supports the intended audience.",
        "Wireframe ဆွဲပါ။ Page region များကို Label တပ်ပါ။ Style တစ်သမတ်တည်းရွေးပြီး Audience အတွက် အထောက်အကူဖြစ်ပုံ ရှင်းပြပါ။"
      ],
      [
        "Testing a web page",
        "A web page should be tested in a browser to check that it displays correctly and behaves as intended. Check links, images, text, forms, navigation, spelling, layout, keyboard use, colour contrast and responsiveness. Test at different window sizes and, where possible, more than one browser. HTML validation can identify errors such as missing tags, incorrect nesting and invalid attributes. Record the problem, expected behaviour, actual result and correction.",
        "Web page ကို Browser တွင် စမ်းသပ်ပြီး မှန်ကန်စွာ ပြသ/လုပ်ဆောင်ကြောင်း စစ်ရသည်။ Link၊ Image၊ Text၊ Form၊ Navigation၊ စာလုံးပေါင်း၊ Layout၊ Keyboard use၊ Colour contrast နှင့် Responsive ဖြစ်မှုတို့ကို စစ်ပါ။ Window size မတူသည့်အခါနှင့် Browser မတူသည့်အခါ စမ်းပါ။ HTML validation ဖြင့် Tag ပျောက်ခြင်း၊ Nesting မှားခြင်းနှင့် Attribute မမှန်ခြင်းကို ရှာနိုင်သည်။",
        "Create a test table listing feature, test, expected result, actual result and action required.",
        "Feature၊ Test၊ Expected result၊ Actual result နှင့် လုပ်ဆောင်ရန်ပါသော Test table တည်ဆောက်ပါ။"
      ],
      [
        "WYSIWYG software",
        "WYSIWYG means “What You See Is What You Get”. A WYSIWYG web editor lets a user design a page visually while the software creates or updates the underlying code. This can be easier for beginners and speed up layout work. A code editor gives direct control over HTML and CSS and helps users understand the structure, but requires syntax knowledge. WYSIWYG tools may generate extra or less tidy code, so the final page should still be tested and inspected.",
        "WYSIWYG သည် “What You See Is What You Get” ဟု အဓိပ္ပာယ်ရသည်။ Web editor သည် Page ကို မြင်ရသည့်အတိုင်း ဒီဇိုင်းလုပ်စေပြီး အောက်ခံ Code ကို Software က ဖန်တီး/ပြင်ဆင်ပေးသည်။ Beginner များအတွက် လွယ်ကူနိုင်သည်။ Code editor သည် HTML/CSS ကို တိုက်ရိုက် ထိန်းချုပ်နိုင်သော်လည်း Syntax သိရမည်။ WYSIWYG tool များ ထုတ်ပေးသော Code ကိုလည်း စစ်ဆေးသင့်သည်။",
        "Compare a WYSIWYG editor and a code editor for a beginner, an experienced developer and a project needing precise code control.",
        "Beginner၊ အတွေ့အကြုံရှိ Developer နှင့် Code control တိကျရန်လိုသော Project အတွက် WYSIWYG နှင့် Code editor ကို နှိုင်းယှဉ်ပါ။"
      ],
      [
        "Multimedia web content",
        "A web page can include images, audio, video, animation and other media. Multimedia should support the message and should not make the page slow or difficult to use. Image file size and dimensions affect loading time. Video and audio may require controls, captions or transcripts. Alternative text helps users who cannot see an image and supports accessibility. Use media that the website owner has permission to publish and respect copyright and licence conditions.",
        "Web page တွင် Image၊ Audio၊ Video၊ Animation နှင့် Media အမျိုးမျိုး ထည့်နိုင်သည်။ Multimedia သည် အကြောင်းအရာကို အထောက်အကူပြုရပြီး Page နှေးခြင်း သို့မဟုတ် အသုံးပြုရခက်ခြင်း မဖြစ်စေသင့်ပါ။ Image size/dimension သည် Loading time ကို သက်ရောက်သည်။ Video/Audio တွင် Control၊ Caption သို့မဟုတ် Transcript လိုနိုင်သည်။ Image မမြင်နိုင်သူများအတွက် Alt text သည် အထောက်အကူဖြစ်သည်။",
        "Choose appropriate media, optimise its size, provide alternative text or captions and check the right to publish it.",
        "သင့်လျော်သော Media ရွေးပါ။ Size optimize လုပ်ပါ။ Alt text/Caption ထည့်ပြီး Publish ခွင့်ရှိ/မရှိ စစ်ပါ။"
      ],
      [
        "Designing a multiple-page website",
        "A multi-page website needs a consistent structure and clear navigation. Plan the purpose, target audience, page list, hierarchy, navigation menu, shared style and content for each page. A sitemap shows how pages relate to one another. Navigation labels should be predictable and links should make it easy to return to the home page or move to related content. Repeated headers, navigation and footers create a consistent house style.",
        "Multi-page website တစ်ခုတွင် Structure တစ်သမတ်တည်းနှင့် Navigation ရှင်းလင်းရမည်။ ရည်ရွယ်ချက်၊ Target audience၊ Page စာရင်း၊ Hierarchy၊ Navigation menu၊ Shared style နှင့် Page တစ်ခုစီ၏ Content ကို စီစဉ်ပါ။ Sitemap သည် Page များအချင်းချင်း ဆက်နွယ်ပုံ ပြသည်။ Navigation label များသည် နားလည်ရလွယ်ပြီး Home page သို့ ပြန်နိုင်ရမည်။",
        "Create a sitemap for a four-page site and define the navigation links shared by every page.",
        "Page လေးမျက်နှာပါ Website အတွက် Sitemap ဖန်တီးပြီး Page တိုင်းတွင် ပါဝင်မည့် Navigation link များ သတ်မှတ်ပါ။"
      ],
      [
        "Building a multiple-page website",
        "Building a multi-page website involves creating the HTML files, linking them with relative paths, applying shared CSS and adding media where required. Each page should have a clear title and meaningful content. Navigation links should point to the correct files and assets should use valid paths. Test every link, image, page title and layout at different screen widths. A final review checks spelling, accessibility, performance, permissions and consistency across the site.",
        "Multi-page website တည်ဆောက်ရာတွင် HTML file များ ဖန်တီးခြင်း၊ Relative path ဖြင့် ချိတ်ဆက်ခြင်း၊ Shared CSS အသုံးပြုခြင်းနှင့် လိုအပ်သည့် Media ထည့်ခြင်း ပါဝင်သည်။ Page တစ်ခုစီတွင် Title နှင့် အဓိပ္ပာယ်ရှိသော Content ရှိရမည်။ Navigation link များသည် File မှန်ကို ညွှန်ပြရမည်။ Link၊ Image၊ Title နှင့် Responsive layout များကို စမ်းသပ်ပြီး Spelling၊ Accessibility၊ Performance၊ Permission နှင့် Consistency စစ်ရမည်။",
        "Build two linked pages, add a shared stylesheet, verify relative paths and test navigation in both directions.",
        "တစ်ခုနှင့်တစ်ခု ချိတ်ထားသော Page နှစ်ခုတည်ဆောက်ပါ။ Shared stylesheet ထည့်ပါ။ Relative path စစ်ပြီး နှစ်ဖက်လုံး Navigation စမ်းပါ။"
      ]
    ],
    "terms": [
      [
        "HTML",
        "HyperText Markup Language used to structure web content.",
        "Web content structure ဖော်ပြရန် အသုံးပြုသော Markup language။"
      ],
      [
        "Element",
        "A component of HTML, usually defined by tags.",
        "Tag များဖြင့် သတ်မှတ်သော HTML အစိတ်အပိုင်း။"
      ],
      [
        "Tag",
        "Markup notation such as <p> or </p>.",
        "<p> သို့မဟုတ် </p> ကဲ့သို့ Markup notation။"
      ],
      [
        "Opening tag",
        "The tag that begins an element.",
        "Element စတင်သော Tag။"
      ],
      [
        "Closing tag",
        "The tag that ends an element.",
        "Element အဆုံးသတ်သော Tag။"
      ],
      [
        "Attribute",
        "Additional information supplied within an opening tag.",
        "Opening tag အတွင်း ထည့်သော အပိုအချက်အလက်။"
      ],
      [
        "Attribute value",
        "The value assigned to an HTML attribute.",
        "HTML Attribute အတွက် သတ်မှတ်သော Value။"
      ],
      [
        "DOCTYPE",
        "Declaration identifying the HTML document type.",
        "HTML document type ကို ဖော်ပြသော Declaration။"
      ],
      [
        "HTML head",
        "Document section holding metadata and title.",
        "Metadata/Title ပါသော Document section။"
      ],
      [
        "HTML body",
        "Section containing visible page content.",
        "မြင်ရသော Page content ပါသော Section။"
      ],
      [
        "Heading",
        "A title or section heading, using h1–h6.",
        "h1–h6 ဖြင့် သတ်မှတ်သော ခေါင်းစဉ်။"
      ],
      [
        "Paragraph",
        "A block of text marked with p.",
        "p ဖြင့် သတ်မှတ်သော စာပိုဒ်။"
      ],
      [
        "Hyperlink",
        "A link to another page or resource.",
        "အခြား Page/Resource သို့ ချိတ်ဆက်သော Link။"
      ],
      [
        "href",
        "An attribute giving a link destination.",
        "Link သွားမည့်နေရာ သတ်မှတ်သော Attribute။"
      ],
      [
        "src",
        "An attribute giving a media file location.",
        "Media file တည်နေရာ သတ်မှတ်သော Attribute။"
      ],
      [
        "alt text",
        "Text describing an image for accessibility.",
        "Accessibility အတွက် Image ရှင်းပြသော စာသား။"
      ],
      [
        "CSS",
        "Cascading Style Sheets controlling presentation.",
        "Web page အလှဆင်ပုံကို ထိန်းချုပ်သော Style language။"
      ],
      [
        "JavaScript",
        "A scripting language used to add web interaction.",
        "Web interaction ထည့်ရန် အသုံးပြုသော Scripting language။"
      ],
      [
        "Browser",
        "Software that requests and displays web pages.",
        "Web page တောင်းယူ/ပြသသော Software။"
      ],
      [
        "WYSIWYG",
        "What You See Is What You Get visual editing.",
        "မြင်ရသည့်အတိုင်း ဒီဇိုင်းလုပ်နိုင်သော Editing ပုံစံ။"
      ],
      [
        "WYSIWYG editor",
        "Software that creates or updates page code through visual editing.",
        "Visual editing မှတစ်ဆင့် Page code ဖန်တီးပေးသော Software။"
      ],
      [
        "Wireframe",
        "A simple plan of a page layout.",
        "Page layout ၏ ရိုးရှင်းသော မူကြမ်း။"
      ],
      [
        "Sitemap",
        "A diagram showing pages and their relationships.",
        "Page များနှင့် ဆက်နွယ်မှုကို ပြသော Diagram။"
      ],
      [
        "Navigation",
        "Links and controls that help users move around a site.",
        "Website အတွင်း ရွှေ့ပြောင်းရန် Link/Control များ။"
      ],
      [
        "Relative path",
        "A file location described relative to the current page.",
        "လက်ရှိ Page နှင့် နှိုင်းယှဉ်ဖော်ပြသော File path။"
      ],
      [
        "Responsive design",
        "A layout adapting to different screen sizes.",
        "Screen size မတူသည့်အခါ လိုက်လျောပြောင်းလဲသော Design။"
      ],
      [
        "Multimedia",
        "Content such as images, audio, video and animation.",
        "Image၊ Audio၊ Video၊ Animation စသော Content။"
      ],
      [
        "Caption",
        "Text describing speech or sound in media.",
        "Media ထဲက စကား/အသံကို စာဖြင့်ဖော်ပြခြင်း။"
      ],
      [
        "Transcript",
        "A text version of spoken content.",
        "ပြောဆိုထားသော Content ၏ စာသားမူ။"
      ],
      [
        "HTML validation",
        "Checking HTML against language rules.",
        "HTML ကို Language စည်းမျဉ်းအရ စစ်ဆေးခြင်း။"
      ],
      [
        "Accessibility",
        "Designing content to be usable by people with different needs.",
        "လိုအပ်ချက်မတူသူများလည်း အသုံးပြုနိုင်အောင် ဒီဇိုင်းလုပ်ခြင်း။"
      ],
      [
        "Semantic HTML",
        "Elements chosen for their meaning and purpose.",
        "အဓိပ္ပာယ်နှင့် ရည်ရွယ်ချက်ကို ဖော်ပြသော HTML element များ။"
      ],
      [
        "Metadata",
        "Information describing a document or resource.",
        "Document/Resource ကို ဖော်ပြသော အချက်အလက်။"
      ],
      [
        "Website testing",
        "Checking pages, links, media, layout and usability.",
        "Page၊ Link၊ Media၊ Layout နှင့် Usability စစ်ဆေးခြင်း။"
      ]
    ],
    "examples": [
      "A heading element marks the main title while paragraph elements hold normal text.",
      "A sitemap helps a visitor understand how the Home, About, Products and Contact pages connect.",
      "Alternative text describes a useful image when it cannot be viewed."
    ],
    "examplesMy": [
      "Heading element သည် အဓိကခေါင်းစဉ်ကို ဖော်ပြပြီး Paragraph သည် ပုံမှန်စာသားကို ထည့်သည်။",
      "Sitemap သည် Home၊ About၊ Products နှင့် Contact page များ ချိတ်ဆက်ပုံကို ပြသည်။",
      "Alt text သည် Image မမြင်နိုင်သည့်အခါ အကြောင်းအရာကို ဖော်ပြပေးသည်။"
    ],
    "table": {
      "caption": "Basic HTML document structure",
      "headers": [
        "Element",
        "Purpose",
        "Example"
      ],
      "rows": [
        [
          "DOCTYPE",
          "Declares the document type",
          "<!DOCTYPE html>"
        ],
        [
          "html",
          "Root element",
          "<html lang=\"en\">"
        ],
        [
          "head",
          "Metadata and title",
          "<title>My page</title>"
        ],
        [
          "body",
          "Visible content",
          "<body>…</body>"
        ],
        [
          "h1",
          "Main heading",
          "<h1>Welcome</h1>"
        ],
        [
          "p",
          "Paragraph",
          "<p>Hello</p>"
        ],
        [
          "a",
          "Hyperlink",
          "<a href=\"about.html\">About</a>"
        ],
        [
          "img",
          "Image with source and alt",
          "<img src=\"photo.jpg\" alt=\"…\">"
        ]
      ]
    },
    "activities": [
      [
        "HTML page",
        "Create an HTML page with a title, two headings, paragraphs, an image and a link.",
        "Title၊ Heading နှစ်ခု၊ Paragraph၊ Image နှင့် Link ပါသော HTML page ဖန်တီးပါ။"
      ],
      [
        "Sitemap planning",
        "Plan a four-page website for a training centre and draw its sitemap.",
        "Training centre အတွက် Page လေးခုပါ Website plan နှင့် Sitemap ဆွဲပါ။"
      ],
      [
        "Website testing",
        "Test your site using a checklist for links, images, text, layout, mobile width and keyboard access.",
        "Link၊ Image၊ Text၊ Layout၊ Mobile width နှင့် Keyboard access ပါသော Checklist ဖြင့် Website စမ်းပါ။"
      ]
    ],
    "slides": [
      "HTML and the role of a markup language",
      "HTML document structure: head, body and metadata",
      "HTML elements, tags and attributes",
      "Page design: wireframes and audience",
      "Testing links, media, layout and validation",
      "WYSIWYG editing and code-based editing",
      "Multimedia and accessibility",
      "Design a site map for multiple pages",
      "Build linked HTML pages and shared CSS"
    ],
    "essays": [
      [
        "Explain the purpose of HTML, CSS and JavaScript in a web page.",
        "HTML defines the structure and meaning of content. CSS controls presentation such as colour, layout and typography. JavaScript adds interaction and behaviour. They work together but have different roles.",
        [
          "HTML",
          "structure",
          "CSS",
          "presentation",
          "JavaScript",
          "interaction"
        ]
      ],
      [
        "Write a basic HTML structure and explain the role of head and body.",
        "A basic document includes <!DOCTYPE html>, html, head and body elements. The head contains metadata and the page title. The body contains visible content such as headings, paragraphs, links and images.",
        [
          "DOCTYPE",
          "html",
          "head",
          "metadata",
          "title",
          "body",
          "visible content"
        ]
      ],
      [
        "Describe how you would test a multi-page website before publishing it.",
        "Check every navigation link, image path, title, spelling, layout and multimedia control. Test at different screen widths and with keyboard navigation. Validate HTML, check accessibility and confirm that all assets are authorised for use.",
        [
          "navigation link",
          "image path",
          "title",
          "spelling",
          "screen widths",
          "keyboard",
          "validate",
          "accessibility"
        ]
      ],
      [
        "Plan a small multi-page website for a training centre and explain how consistent navigation helps users.",
        "Create a sitemap with Home, Courses, About and Contact pages. Use the same navigation menu and visual style across all pages. Clear labels, working relative links and a visible route back to Home help visitors understand and move around the site.",
        [
          "sitemap",
          "Home",
          "Courses",
          "navigation menu",
          "consistent",
          "relative links",
          "clear labels"
        ]
      ]
    ]
  }
];
window.HJS_LESSON_SECTION_NAMES = ["Unit Overview", "Learning Objectives", "Detailed Study Notes", "Topic-by-Topic Explanations", "Key Definitions", "Important Examples", "Tables & Diagrams", "Step-by-Step Instructions", "Practical Activities", "Worked Examples", "Important Exam Points", "Unit Glossary", "Unit Presentation PowerPoint Slide Outline", "Knowledge Check Quiz", "One-Hour Secure Unit Examination"];
