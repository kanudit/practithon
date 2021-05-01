# sort comma sep list
wordlist = input('put a jawn with commas seperating it')
seperated_wordlist = wordlist.split(',')
sorted_wordlist = sorted(seperated_wordlist)
complete_wordlist = ','.join(sorted_wordlist)
print (complete_wordlist)