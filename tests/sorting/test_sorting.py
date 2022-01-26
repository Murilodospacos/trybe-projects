from src.sorting import sort_by

jobs_mock = [
    {"min_salary": 1500, "max_salary": 4000, "date_posted": "2021-02-20"},
    {"min_salary": 3680, "max_salary": 6000, "date_posted": "2022-11-11"},
    {"min_salary": 2740, "max_salary": 4500, "date_posted": "2020-02-13"},
]


def test_sort_by_criteria():
    pass

    # O teste rejeita implementações que não ordenam em ordem crescente quando
    # o critério é min_salary.
    sort_by(jobs_mock, "min_salary")
    assert jobs_mock == [
        {"min_salary": 1500, "max_salary": 4000, "date_posted": "2021-02-20"},
        {"min_salary": 2740, "max_salary": 4500, "date_posted": "2020-02-13"},
        {"min_salary": 3680, "max_salary": 6000, "date_posted": "2022-11-11"},
    ]

    # O teste rejeita implementações que não ordenam corretamente.
    sort_by(jobs_mock, "max_salary")
    assert jobs_mock == [
        {"min_salary": 3680, "max_salary": 6000, "date_posted": "2022-11-11"},
        {"min_salary": 2740, "max_salary": 4500, "date_posted": "2020-02-13"},
        {"min_salary": 1500, "max_salary": 4000, "date_posted": "2021-02-20"},
    ]

    # O teste rejeita implementações que não ordenam corretamente.
    sort_by(jobs_mock, "date_posted")
    assert jobs_mock == [
        {"min_salary": 3680, "max_salary": 6000, "date_posted": "2022-11-11"},
        {"min_salary": 1500, "max_salary": 4000, "date_posted": "2021-02-20"},
        {"min_salary": 2740, "max_salary": 4500, "date_posted": "2020-02-13"},
    ]
