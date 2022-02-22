def is_palindrome_recursive(word, low_index, high_index):
    if word == '':
        return False
    # https://www.w3schools.com/python/python_howto_reverse_string.asp
    if low_index >= high_index:
        return True
    if word[low_index] != word[high_index]:
        return False
    return is_palindrome_recursive(word, low_index + 1, high_index - 1)
