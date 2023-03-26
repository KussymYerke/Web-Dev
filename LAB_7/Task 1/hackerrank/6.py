if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    num = int(input())
    listi = []
    for i in range(x+1):
        for j in range(y+1):
            for k in range(z+1):
                if(i+j+k != num):
                    listi.append([i, j, k])
    print(listi)