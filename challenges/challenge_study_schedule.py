def study_schedule(permanence_period, target_time):
    if not target_time:
        return None
    else:
        count = 0
        for item in permanence_period:
            if type(item[0]) != int or type(item[1]) != int:
                return None
            elif item[0] <= target_time <= item[1]:
                count += 1

    return count
