# Feeds of the Internet are Usually Birdcraft

> "Travel conditions are (stable, liquid, gas, or plasma) that can send energy. For example, feeds of the internet are usually birdcraft. But the sound can also be transported through clothes and water. The phone can send electrons in the form of electricity. There are advantages and disadvantages for the future."
>
> *-- Simple English Wikipedia, as quoted by Google Translate.*


This is a simple party game for 3+ players about recovering meaning after it has been smeared into a pulp. There's no need for binaries, or anything fancy really. All you really need is a computer or tablet connected to the web, an instant messaging app, five minutes, and some friends!


## Gameplay

Players will take turns being the "Source". All others are "Receivers". The Source will choose an article from Wikipedia (preferably Simple English Wikipedia), take its first paragraph, mosh it up by applying successive Google Translate transformations according to a specific "recipe", and then send it to the Receivers.

The Receivers will then try to guess the original article using the smoshed-up text in up to five minutes. They may only use Wikipedia for searching and following links -- no external sites like Google allowed :p. Receivers present Wikipedia pages to the Source to see if they found the original article. If they did,  they score. Otherwise the Source privately gives the Receiver an indication of how close they are to the original article, as in the "Hot-and-cold" game. The Source may not give any other kind of hint. Receivers that finish faster earn more points.

The Source scores if at least one Receiver -- but not all of them -- found the original article. This way they're incentivized to give the Receivers an interesting challenge.


## Setup for the Source

You'll need browser tabs open in Google Translate with the following languages selected:

1. English -> Arabic
2. Arabic -> Filipino
3. Filipino -> Igbo
4. Igbo -> Swahili
5. Swahili -> English

(feel free to change English to other languages if that makes sense for your group)

Have a browser tab open in Simple English Wikipedia (preferably) for checking the Receivers' article guesses.

Finally, make sure you are ready to answer all Receivers quickly through a messaging app in private if needed.


## Setup for Receivers

We recommend splitting your screen with the browser window open in Simple English Wikipedia taking most of its area (as this will be your "gameplay" screen), and the rest split between the messaging app and a text editor where you'll paste the clue in VERY LARGE LETTERS. In testing it seemed to help :p.


## How to choose good articles

Avoid articles about things with proper names -- i.e. people, landmarks, etc... try to think of general things instead. For instance, instead of choosing "King's Cross station", think of "Railway" or "Rail Transport". Then, since these may be a little too easy, go for "Subway" which you'll notice disambiguates to "Rapid Transit".

Then test a lot of articles until you find a good one! Performing the translations is very quick if you have all tabs pre-open, and use the copy button below the translated box, plus the Ctrl+A -> Ctrl+V keyboard shortcuts for pasting.


## Scoring

The Source scores 3 points (2 points in a 3-player game) if at least one Receiver guessed correctly, but not all of them did. Otherwise the Source does not score any points this round.

The Receiver's scores depend on how many Receivers are playing the round. Suppose there are N Receivers:

* The fastest Receiver to guess correctly will score N points
* The second fastest scores N - 1 points
* The third fastest scores N - 2 points  ...and so on.

Finally, if no Receivers guessed correctly in five minutes, all Receivers get 2 points (1 point in a 3-player game), and the Source gets nothing.


## Endgame

Aaaand, that's it! That's the game! Just make sure everyone in the group played as the Source at least once and then tally up the points.
So, did you find out what article the quote from the beginning came originally from?



# Omake - or - So I got bored after making the game

I'm a game developer / backend developer by trade, and here I was, having just designed a game that requires no art and no programming in the first few hours or so of the Jam. So I playtested the game a lot with other attendees, but eventually hit a sweet spot and got pretty happy with it. Here in my site there are way too many programmers in each team already, so what was I going to do?

So I decided to write a draft of a software architecture scheme for game applications I've been thinking about for some time. Because you know, game code is usually a hot mess and pretty hard do modify, and I want to live in a world where we don't have to suffer as much. It got pretty nice, so I'm including it in the uploads.

But there's no point in drafting an architecture without testing it, so I also decided to learn me some frontend JavaScript -- PixiJS, Webpack, all that stuff (I usually code in Python, Lua, Java or C++.. or Node, but only in the backend) because you know, it was about time, and apply the architecture I drafted. I decided to make a helper tool for this game, where you just write the title of a Simple English Wikipedia article and it spits out the first paragraph. And lo and behold, it worked. So it's going in the pack together (but don't expect much, I spent most of the time learning the engine and getting Webpack to work).

The next step would be to hook this directly to the Google Cloud Translation API and get it to mosh up the paragraph automatically (it's sad that it's a paid service though =( ), then hooking up a chat app into it, and then perhaps building some heuristics for finding good articles automatically, so that we don't even need a Source player and the scoring system would becomes much simpler.


Well, that's it for today. See ya! Oh and don't forget:

> Vision is a feeling of total tiredness, feelings of rejection and relationships, and emotions that you think. Medicine involves depression, depression, or confusion. Impact of damage is also part of the process alone, alone, causing loss or loss of a loved one."
>
> *-- Simple English Wikipedia, as quoted by Google Translate.*

(Achievement GET!... also, whoa, this one is HARD.... and so very dark D:)
