from exercisesmay3 import Dog
import random

class PetDog(Dog):
    def __init__(self, name , age ,weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print("Bork Bork!")
        self.trained = True

    def play(self):
        dog_names = ['borkstein','tiger','rivki', 'sierra']
        dogs =""
        for name in dog_names:
            dogs += name + ' '
        print(f'{dogs}and {self.name} all play together')
        
    def do_a_tricks(self):
        if self.trained == True:
            sentence = [self.name + " does a roll.", self.name + " jumps in the air!",  self.name + " eats your food!"]
            print(random.choice(sentence))







porko = PetDog('porko', 3 , 20)
print(porko.name)
porko.train()
porko.play()
porko.do_a_tricks()