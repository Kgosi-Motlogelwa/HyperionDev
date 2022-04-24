class Solution:
       def groupAnagrams(self, strs):
      result = {}
      for i in strs:
         x = "".join(sorted())
         if x in result:
            result[x].append(i)
         else:
            result[x] = [i]
      return list(result.values())
ob1 = Solution()
print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

<!-- SEE HELP BELOW -->
From what I gather the code below is the conclusion to the logical pathway you were taking. Look at, and test the code to see if the output is what you had visualised. Same code in anagram.py.

class Solution:
  def groupAnagrams(self, strs):
    result = {}
    for i in strs:
      x = "".join(sorted(i))
      print(x)
      if x in result:
          result[x].append(i)
      else:
          result[x] = [i]
    return list(result.values())
ob1 = Solution()
print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

<!-- COMMENTS -->
Your logic was pretty good and you were almost there. Here are some errors:
(1) Indentation on line 2. You've indented well everywhere else. Backspace line 2 to the left a couple of times. 
      Extra Note: When coding it's often really small things like these you need to check. Most IDE's will help you with this. Google linting.
(2) Forgot to add i to sorted() - sorted(i). i being the word you wanted to sort in list strs.
      Extra Note: I added an additional print statement after the line the error was on. Remove after viewing. Programmers often do this to confirm if their solution is still progressing as they envision it. It's hard to hold a lot of code in your head at one time. You could have caught the error before writing the if statements or afterwards.
(3) 




