if __name__ == '__main__':
    N = int(input())
    listi = []
    for _ in range(N):
        s, *lk = input().split()
        lk = list(map(int, lk));
        if s == 'insert':
            listi.insert(lk[0], lk[1])
        if s == 'append':
            listi.append(lk[0])
        if s == 'print':
            print(listi)
        if s == 'pop':
            listi.pop()
        if s == 'sort':
            listi.sort()
        if s == 'reverse':
            listi.reverse()
        if s == 'remove':  
            listi.remove(lk[0])