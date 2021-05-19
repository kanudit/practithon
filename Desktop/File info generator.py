# file = open("test.txt", "r")

def count_characters(file_name):
    '''counts the characters in file'''
    try:   
        file = open(str(file_name), "r")
        file_str = file.read()
        char_count = len(file_str)
        
        file.close()
        return char_count
    except:
        print(f'{file_name} does not exist')

def count_words(file_name):
    '''counts word in txt file'''
    try:
        file = open(str(file_name), "r")
        file_str = file.read()
        word_count = len(file_str.split())

        file.close()
        return word_count
    except:
        print(f'{file_name} does not exist')

def count_lines(file_name):
    try:
        '''counts number of lines in txt file'''
        file = open(str(file_name), "r")
        file_lines = file.readlines()
        line_count = len(file_lines)
    
        file.close()
        return line_count
    except:
        print(f'{file_name} does not exist')

# file_lines = file.readlines()
def it_over_object():
    '''iterates over an object'''
    file_name = input("put file name: .txt")
    file = open(str(file_name), "r")

    for line in file:
        print(line)
    
    file.close()

def write_a_file(file_name):
    '''creates new file'''
    with open(str(file_name), 'w') as file_obj:
        for number in range(4):
            # square = number * number
            file_obj.write(input("write a new line: "))

def gfn():
    '''get files name'''
    forbid = ['>','<',':','"','|','?','*']
    file_name = input("Input a file name: " ) + ".txt"
    
    for char in forbid:
        while char in file_name: 
            print("invalid name \n try again")
            file_name = str(input("Input a file name: ") + ".txt" )
            if file_name == "quit":
                quit()
        continue            
    print(f'the file name is :{file_name}')
    return str(file_name)
# write_a_file(gfn())
def print_file_info(file):
    print(f'Character Count: {count_characters(file)}')
    print(f'Word Count: {count_words(file)}')
    print(f'Number of lines: {count_lines(file)}')
        
file = gfn()

print_file_info(file)
# print("tit")
# print(file_str)

# it_over_object()
