import pygame, sys
from pygame.locals import *

#initialize set-up
pygame.init()

#Setting up password to access game
p = input(f'enter password: ')
password = p.lower()

#Main game code
def main():
    print('running game')

    #setup window
    windowSurface = pygame.display.set_mode((500, 400) , 0, 32)
    pygame.display.set_caption('Hello World')

    #setup colors
    BLACK = (0,0,0)
    WHITE = (255, 255, 255)
    RED = (255, 0, 0)
    GREEN = (0, 255, 0)
    BLUE = (0,0,255)
    
    #setup fonts
    basicFont = pygame.font.SysFont(None, 48)

    #setup text
    text = basicFont.render("Hello World", True, WHITE, BLUE) #white text, blue background
    textRect = text.get_rect()
    textRect.centerx = windowSurface.get_rect().centerx
    textRect.centery = windowSurface.get_rect().centery

    #Make the whole window white
    windowSurface.fill(WHITE) 

    #draw green polygon
    pygame.draw.polygon(windowSurface, GREEN, ((146,0), (291, 106), (236, 277), (56, 277), (0, 106)))

    #draw blue lines
    pygame.draw.line(windowSurface, BLUE, (60,60), (120, 60), 4) #(start, end, line thickness)
    pygame.draw.line(windowSurface, BLUE, (120,60), (60, 120), 4)
    pygame.draw.line(windowSurface, BLUE, (60,120), (120, 120), 4)
    

    #draw text onto surface
    windowSurface.blit(text, textRect) #a blit puts something onto the screen

    #draw window onto screen
    pygame.display.update()

    while True:
        for event in pygame.event.get():
            if event.type == QUIT:
                pygame.quit()
                sys.exit()

#Checking that password is correct
if __name__ == '__main__':
    if password == "password":
        print('access granted')
        main()
    else:
        print('access denied')
