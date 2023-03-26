if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    maxi = -200
    maxi2 = -200
    for i in sorted(arr):
        if(maxi < i):
            maxi2 = maxi
            maxi = i
    print(maxi2)
    