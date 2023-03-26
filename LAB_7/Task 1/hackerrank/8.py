if __name__ == '__main__':
    listi = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        listi.append([score, name])
    listi.sort()
    pos = 0
    for i in range(len(listi)):
        if i > 0 and listi[i][0] != listi[i-1][0]:
            pos += 1
        if(pos == 1):
            print(listi[i][1])
        if pos > 1:
            break