def solution(arr):
    answer = []
    for i in range(len(arr)):
        if i == 0 or arr[i] != arr[i - 1]:
            answer.append(arr[i])

    return answer


print(solution([1, 1, 1, 2, 3]))
