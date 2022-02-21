def is_palindrome_recursive(word, low_index, high_index):
    if word == '':
        return False
    elif len(word) < high_index:
        return True
    return is_palindrome_recursive(word, low_index, len(word) - 1)
