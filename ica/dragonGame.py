import random
import time

def displayIntro():
    print('You are in a land of dragons')
    print()
def chooseCave():
    cave = ''
    while cave.lower() != 'Green' and cave.lower() != 'Black':
        cave = input('Pick a cave (Green or Black): ')
    return cave
def caveChecker(chosenCave):
    print('You approach the cave...')
    time.sleep(2)

    print('It is a dark and spooky cave...')
    time.sleep(2)

    print('A dragon appears in front of you and he...')
    time.sleep(2)
    list = ['Green', 'Black']
    friendlyCave = random.choice(list)
    if chosenCave == str(friendlyCave):
        print('Gives you his treasure!')
    else:
        print('Eats you!')


displayIntro()

playAgain = 'yes'
while playAgain.lower() == 'yes':
    choice = chooseCave()
    caveChecker(choice)
    time.sleep(2)
    print('Do you want to play again?')
    playAgain = input('Yes or no: ')