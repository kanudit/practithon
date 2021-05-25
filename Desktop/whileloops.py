def sublist(lst):
    valid = True
    sub = []
    
    while valid == True:
        for item in lst:
            if int(item) == 5:
                valid = False
            else:
                sub.append(item)
    return sub

# print(sublist([1,2,3,4,5,6,7,8]))
# x = [1,8,9,7,2,5,4,6,8,7,2,0]
# def sublist(lst):
#     sub = []
    
#     while True:
#         for item in lst:
#             if int(item) == 5:
#                 return sub

#             else:
#                 sub.append(item)
# print(sublist(x))

# str1 = "Today you are you! That is truer than true! There is no one alive who is you-er than you!"
# split1 = str1.split()
# print(split1)

# for item in str1:
#     if item == "true":
#         print("ok")


# 10am-7 monday thru Friday
# calisbach
# people who were scammed and try to help them get there money
# I get a list, people will set 



def last_four(x):
    string = str(x)
    return  string[-4:]
    

ids = [17573005, 17572342, 17579000, 17570002, 17572345, 17579329]

last_four(ids[0])





punctuation_chars = ["'", '"', ",", ".", "!", ":", ";", '#', '@']
# lists of words to use
positive_words = []
with open("positive_words.txt") as pos_f:
    for lin in pos_f:
        if lin[0] != ';' and lin[0] != '\n':
            positive_words.append(lin.strip())


negative_words = []
with open("negative_words.txt") as pos_f:
    for lin in pos_f:
        if lin[0] != ';' and lin[0] != '\n':
            negative_words.append(lin.strip())
            
def strip_punctuation(string):
    for char in string:
        if char in punctuation_chars:
            string = string.replace(char , "")
            
    return 
    
twitter_data = open('project_twitter_data.csv', 'r')
results = open('resulting_data.csv' , 'w')
results.write('Number of retweets, Number of Replies , Positive Score, Negative Score, Net Score')
tweets = twitter_data.readlines()
header = tweets[0]
print(header)

for line in tweets[1:]:
    lit = line.split(",")
    tweet = strip_punctuation(lit[0])
    positive = get_pos (tweet)
    negative = get_neg (tweet)
    net = positive - negative
    retweets = int(lit[1])
    replies = int(lit[2])
    results.write(" {},{},{},{}, {} \n" . format (retweets, replies, positive, negative, net))
   
    



    
   



def get_neg (string):
    
    string = strip_punctuation(string)
    
    negative = 0
    words = string.split()
    for word in words:
        if word.lower() in negative_words:
            negative = negative + 1
    
    return negative

def get_pos (string):
    
    string = strip_punctuation(string)
    
    positive = 0
    words = string.split()
    for word in words:
        if word.lower() in positive_words:
            positive = positive + 1
    
    return positive
twitter = open('project_twitter_data.csv', 'r')
read = twitter.read()
lines = read.split()

print(lines[0])

file = open("resulting_data.csv", "w")




punctuation_chars = ["'", '"', ",", ".", "!", ":", ";", '#', '@']
# lists of words to use
positive_words = []
with open("positive_words.txt") as pos_f:
    for lin in pos_f:
        if lin[0] != ';' and lin[0] != '\n':
            positive_words.append(lin.strip())


negative_words = []
with open("negative_words.txt") as pos_f:
    for lin in pos_f:
        if lin[0] != ';' and lin[0] != '\n':
            negative_words.append(lin.strip())
            
def strip_punctuation(string):
    for char in string:
        if char in punctuation_chars:
            string = string.replace(char , "")
            
    return string

def get_pos (string):
    
    string = strip_punctuation(string)
    
    positive = 0
    words = string.split()
    for word in words:
        if word.lower() in positive_words:
            positive = positive + 1
    
    return positive

def get_neg (string):
    
    string = strip_punctuation(string)
    
    negative = 0
    words = string.split()
    for word in words:
        if word.lower() in negative_words:
            negative = negative + 1
    
    return negative

twitter_data = open('project_twitter_data.csv', 'r')
results = open('resulting_data.csv' , 'w')
results.write('Number of Retweets, Number of Replies, Positive Score, Negative Score, Net Score\n')
tweets = twitter_data.readlines()
for line in tweets[1:]:
    lit = line.split(",")
    tweet = strip_punctuation(lit[0])
    positive = get_pos (tweet)
    negative = get_neg (tweet)
    net = positive - negative
    retweets = int(lit[1])
    replies = int(lit[2])
    results.write("{},{},{},{}, {} \n" . format (retweets, replies, positive, negative, net))
   
    



    
 