import string


def find_duplicate(nums):
    if not nums or type(nums) == string or len(nums) == 1:
        return False
