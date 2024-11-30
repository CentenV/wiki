# Basics of C++

---

# Output

```cpp
#include <iostream>
int main()
{
	std::cout << "Hello world";
}
```

```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << "Hello world";
}
```

---

# Input

The `cin` object reads the input from the user

It does not return an error if the data type of the input is not the same as the one assigned in code.

> **Code**
> 

```cpp
#include <iostream>

using std::cout;
using std::cin;

int main()
{
    int num;
    cout << "Enter a number: ";
    cin >> num;
    cout << "You entered " << num;
}
```

> **Output**
> 

```
Enter a number: 10
You entered 10
```

Input would read up until the next element that is not the same data type as the variable `cin` is assigning to. That means if `cin` is reading to an integer variable, it would see the input *3.14* as *3* and discard the *.14*.

---

# Variables

Variables is a named location in memory that holds a value. They are declared exactly like C and similar to C, C#, Java, etc. where we have the *datatype*, *name*, *equals*, and the *value*/initializer which is optional.

```cpp
datatype name = value;

int i = 100;
float f = 25.55;
double d = 25.555;
string str = "hello";
```

[Data Types in C++](https://www.notion.so/Data-Types-in-C-054f554b5abf472d9c9666dccd8afa76?pvs=21)

### Ways to Initialize a Variable in C++

Method 1: Declaring and Initializing a Variable using *Equals* `=`

```cpp
int i = 50;
```

Method 2: Declaring and Initializing a Variable using *Parenthesis* `()`

```cpp
int i(50);
```

Method 3: Declaring and Initializing a Variable using Braces `{}`

```cpp
int i{50};
```

## Constants

A constant variable is one whose value cannot change.

```cpp
const int NUMBER_OF_TIMES = 100;
```

It is always in the syntax of `UPPER_CASE_SNAKE_CASE` in C++

## Modifiers

A modifier is a keyword that is used to alter the meaning of the variable type

The data type modifiers are:

- signed
- unsigned
- long
- short

---

# Comments

Comments is a piece of text that is ignored by the compiler. It is used to document code, provide explanations, or temporarily disable certain portions of code.

```cpp
// This is a comment in C++
```

```cpp
/* This is
a multi-line
comment */
```

---

# Type Casting

In C++, there is support for both implicit and explicit type casting.

Implicit casting is where **the compiler infers and automatically converts one type to another** (i.e. adding an integer and a character; the character would be casted to an int)

There are multiple ways of explicitly casting:

Static Cast: the most common explicit casting function, static casting allows conversion to another data type as long as it is defined/considered safe by the compiler. It convert between pointers and related classes

```cpp
new_data_type var = static_cast<new_data_type>(oldVar)
```