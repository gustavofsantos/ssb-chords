const Tab = require('../src/tab');
const assert = require('assert');

describe('Tab test', function() {

  describe('Create a tab', function() {
    let tab = null;

    it('Should create a tab', () => {
      tab = new Tab({
        song: 'Bohemian Rhapsody',
        author: 'Queen',
        tab: `
        G
        Is this the real life
        A7           G    A7
        Is this just fantasy
        D7          Am7 D7
        Caught in a landslide
           G           Am7  G
        No escape from reality
        Em
        Open your eyes
             G7                   C
        Look up to the skies and see
        Am                   D7
        I'm just a poor boy, I need no sympathy
                    G#   G     F#   G
        Because I'm easy come, easy go,
        G#     G     F#     G
        little high, little low,
        C           G/B         Bbdim7         D7
        Any way the wind blows, doesn't really matter to me,
           G
        To me
        
        
        [Verse]
        
        G          Em
        Mama, just killed a man,
              Am
        Put a gun against his head,
                  Am                 D
        Pulled my trigger, now he's dead,
        G              Em
        Mama, life had just begun,
            Am                              D
        But now I've gone and thrown it all away
        C    G Am
        Mama ooo,
               Dm
        Didn't mean to make you cry
           G                               C
        If I'm not back again this time tomorrow
              G         Am        Fm                C
        Carry on, carry on, as if nothing really matters
        
        G
        
        [Verse]
        
        G            Em
        Too late, my time has come,
              Am
        Sends shivers down my spine
               Am               D
        Body's aching all the time,
        G                        Em
        Goodbye everybody - I've got to go
              Am                           D
        Gotta leave you all behind and face the truth
        C    G Am
        Mama ooo- (any way the wind blows)
        Dm
        I don't want to die,
          G                                      C
        I sometimes wish I'd never been born at all
        
        
        [Solo]
        
        | C G | Am  | Dm  | G   |
        | C G | Am  | Dm  | Bb  Bb A G# G | F#   |
        
        
        [Interlude 1]
        
        B F#                 B    F#
        I see a little silhouetto of a man,
        F#   B       F#   B       F#                 B  F#
        Scaramouche, scaramouche, will you do the Fandango
        A#              F          A         C#          F#
        Thunderbolt and lightning, very very frightening me
        N.C.
        Galileo, Galileo
        N.C.
        Galileo, Galileo
        N.C.
        Galileo, Figaro - Magnifico
        
        G#  G      F#   G    G# G    F#    G
        I'm just a poor boy, no-body loves me.
        F    C      Cdim C   F      C    Cdim C
        He's just a poor boy from a poor fami-ly.
        F             C/E            D        G    F  C/E  D#dim  Dm7
        Spare him his life from this monstrosity.
        G#   G     F#   G   G#       G      F#   G  C
        Easy come, easy go, will you let me go?  Bismillah!
            G                    C
        No, we will not let you go.  Bismillah!
        G                    C             G
        We will not let you go.  Bismillah!  We will not let you go.
                                                      D#7
        Will not let you go.  Will not let you go. Ahhhhhhhhh
        G#m F#  B   A#  D#  G   C    N.C.
        No, no, no, no, no, no, no.  Oh, mama mia, mama mia
             C           G      C   F         B          Em       G
        Mama mia, let me go.  Beelzebub has a devil put aside for me,
        
        
        [Riff]
        
        | C   | C   | C   | D   |
        
        
        [Interlude 2]
        
        G                                   C          G   Bb
          So you think you can stone me and spit in my eye
        G                                  C           F
          So you think you can love me and leave me to die
        Dm  G     Dm                    G
        Oh, baby - can't do this to me, baby
        Dm             G     Dm             G           C
        Just gotta get out - just gotta get right outta here
        
        
        [Riff/Instrumental]
        
        |(C)  | C   | C   | D   | N.C.|
        | Ab  | F   | G   | G   | G   |
        | C  G  | Am  E Am | E Am G C | B  Em | F  C  |
        
        
        [Outro]
        
        Am                Em
        Nothing really matters,
        Am         Em
        Anyone can see,
        Am                Fm    F/G                       C
        Nothing really matters, nothing really matters to me,
        
        
        [Instrumental]
        
        |(C) F/C | C  Cdim |
        | G/B  Gm/Bb | A    Bbdim | A A7 D    |
        
        
        [Coda]
        
        G   D/F#    Ddim/F Em7    D
        Any way the wind   blows ...
        
        
        G       x-x-5-4-3-x
        D/F#    x-x-4-2-3-x
        Ddim/F  x-x-3-1-3-x
        Em7     x-x-2-0-3-x
        `,
        capo: '3',
      });

      assert(typeof tab !== null);
    });

    it('Print pretty json', () => {
      const pretty = tab.toPrettyJSON();

      console.log(pretty);
      assert(typeof pretty === 'string');
    });

    it('Pretty print', () => {
      const pretty = tab.toPrettyString();

      console.log(pretty);
      assert(typeof pretty === 'string');
    })
  });
});
