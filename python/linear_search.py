array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    for x in range(0,len(array_to_search_through)):
        if array_to_search_through[x]==value_to_find:
            return x

#normally would just do array_to_search_through.index(value_to_find)
print(linear_search(7,array_to_search_through))


def linear_search_global(value_to_find, array):
    list=[]
    for x in range(0,len(array)):
        if array[x]==value_to_find:
            list.append(x)
    return list

#normally would just do array_to_search_through.index(value_to_find)
print(linear_search_global(7,[0,7,1,7,2,7,3]))
