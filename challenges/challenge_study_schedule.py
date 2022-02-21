# https://stackoverflow.com/questions/13628791/determine-whether-integer-is-between-two-other-integers
def study_schedule(permanence_period, target_time):
    if not target_time:
        return None
    count = 0
    for item in permanence_period:
        # https://www.w3schools.com/python/ref_func_isinstance.asp
        # Tive ajuda da Lena e do Mauricio, pois com type/int não passou
        if not isinstance(item[0], int) or not isinstance(item[1], int):
            return None
        elif item[0] <= target_time <= item[1]:
            count += 1

    return count
