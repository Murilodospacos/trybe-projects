def is_palindrome_iterative(word):
    reverse_word = word[::-1]
    if word == '':
        return False
    elif word == reverse_word:
        return True
    else:
        return False
