import random

def displayIntro():
    print('You are in a land of dragons')
    print()
def chooseCave():
    cave = ''
    while cave != '1' and cave != '2':
        print('Which cave will you go into (1 or 2):')
        cave = input('Pick a cave (1 or 2)')
    return cave
def caveChecker(chosenCave):
    friendlyCave = random.randint(1,2)
    if chosenCave == str(friendlyCave):
        print('Gives you his treasure')
    else:
        print('You make a tasty snack')


displayIntro()

playAgain = 'yes'
while playAgain.lower() == 'yes':
    choice = chooseCave()
    caveChecker(choice)

    print('Do you want to play again?')
    playAgain = input('Yes or no: ')