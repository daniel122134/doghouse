import './Dogedex.css'
import React from "react";
import dog1 from "./assets/Pekingese.jpg";
import dog2 from "./assets/Pomeranian.jpg";
import dog3 from "./assets/Rottweiler.jpg";
import dog4 from "./assets/Samoyed.jpg";
import dog5 from "./assets/Bearded Collie.jpg";
import dog6 from "./assets/Chihuahua.jpg";
import dog7 from "./assets/Dalmatian.jpg";
import dog8 from "./assets/Golden Retriever.jpg";

function DogedexPage() {
  return (
    <div className="dogs">
      <div className="dog">
        <img src={dog6} alt="Chihuahua"/>
        <h2>Chihuahua</h2>
        <p>The Chihuahua is a tiny dog with a huge personality. A national symbol of Mexico, these alert and amusing
          "purse dogs" stand among the oldest breeds of the Americas, with a lineage going back to the ancient
          kingdoms of pre-Columbian times. The Chihuahua is a balanced, graceful dog of terrier-like demeanor,
          weighing no more than 6 pounds. The rounded "apple" head is a breed hallmark. The erect ears and full,
          luminous eyes are acutely expressive. Coats come in many colors and patterns, and can be long or short.
          The varieties are identical except for coat. Chihuahuas possess loyalty, charm, and big-dog attitude.
          Even tiny dogs require training, and without it this clever scamp will rule your household like a little
          Napoleon. Compact and confident, Chihuahuas are ideal city pets. They are too small for roughhousing
          with kids, and special care must be taken in cold weather, but Chihuahuas are adaptable'¿as long as they
          get lots of quality time in their preferred lap.</p>
      </div>
      <div className="dog">
        <img src={dog2} alt="Pomeranian"/>
        <h2>Pomeranian</h2>
        <p>The tiny Pomeranian, long a favorite of royals and commoners alike, has been called the ideal companion.
          The glorious coat, smiling, foxy face, and vivacious personality have helped make the Pom one of the
          world's most popular toy breeds. ¿The Pomeranian combines a tiny body (no more than seven pounds) and a
          commanding big-dog demeanor. The abundant double coat, with its frill extending over the chest and
          shoulders, comes in almost two dozen colors, and various patterns and markings, but is most commonly
          seen in orange or red. Alert and intelligent, Pomeranians are easily trained and make fine watchdogs
          and perky pets for families with children old enough to know the difference between a toy dog and a toy.
          Poms are active but can be exercised with indoor play and short walks, so they are content in both the
          city and suburbs. They will master tricks and games with ease, though their favorite event is
          providing laughs and companionship to their special human.</p>
      </div>
      <div className="dog">
        <img src={dog8} alt="Golden Retriever"/>
        <h2>Golden Retriever</h2>
        <p>The Golden Retriever, an exuberant Scottish gundog of great beauty, stands among America's most popular
          dog breeds. They are serious workers at hunting and field work, as guides for the blind, and in
          search-and-rescue, enjoy obedience and other competitive events, and have an endearing love of life when
          not at work. The Golden Retriever is a sturdy, muscular dog of medium size, famous for the dense,
          lustrous coat of gold that gives the breed its name. The broad head, with its friendly and intelligent
          eyes, short ears, and straight muzzle, is a breed hallmark. In motion, Goldens move with a smooth,
          powerful gait, and the feathery tail is carried, as breed fanciers say, with a 'merry action.' The most
          complete records of the development of the Golden Retriever are included in the record books that were
          kept from 1835 until about 1890 by the gamekeepers at the Guisachan (pronounced Gooeesicun) estate of
          Lord Tweedmouth at Inverness-Shire, Scotland. These records were released to public notice in Country
          Life in 1952, when Lord Tweedmouth's great-nephew, the sixth Earl of Ilchester, historian and sportsman,
          published material that had been left by his ancestor. They provided factual confirmation to the stories
          that had been handed down through generations. Goldens are outgoing, trustworthy, and eager-to-please
          family dogs, and relatively easy to train. They take a joyous and playful approach to life and maintain
          this puppyish behavior into adulthood. These energetic, powerful gundogs enjoy outdoor play. For a breed
          built to retrieve waterfowl for hours on end, swimming and fetching are natural pastimes. </p>
      </div>
      <div className="dog">
        <img src={dog4} alt="Samoyed"/>
        <h2>Samoyed</h2>
        <p>The Samoyed is a substantial but graceful dog standing anywhere from 19 to a bit over 23 inches at the
          shoulder. Powerful, tireless, with a thick all-white coat impervious to cold, Sammies are perfectly
          beautiful but highly functional. Even their most delightful feature, a perpetual smile, has a practical
          function: The upturned corners of the mouth keep Sammies from drooling, preventing icicles from forming
          on the face. A Sammy sentenced to solitary confinement in the yard is a miserable and destructive
          creature. These are smart, social, mischievous dogs who demand love and attention. Sammies need
          structure in training. Teach them what's expected of them early, and practice it with them often.
          Samoyeds, the smiling sled dogs, were bred for hard work in the world's coldest locales. In the Siberian
          town of Oymyakon, for instance, temperatures of minus-60 degrees are common. The Sammy's famous white
          coat is thick enough to protect against such brutal conditions. Powerful, agile, tireless, impervious
          to cold, Sammies are drop-dead gorgeous but highly functional. Even their most delightful feature, a
          perpetual smile, has a practical function: The mouth's upturned corners keep Sammies from drooling,
          preventing icicles from forming on the face.</p>
      </div>
      <div className="dog">
        <img src={dog5} alt="Bearded Collie"/>
        <h2>Bearded Collie</h2>
        <p>A boisterous and charismatic droving dog from Scotland, the shaggy-coated Bearded Collie ('Beardie' to
          his friends) enjoys outdoor exercise in all weather. Bred to be independent decision-makers, they can be
          willful but are always friendly. Standing 20 to 22 inches at the shoulder and covered head to tail in a
          shaggy double coat, Beardies bear a passing resemblance to another British favorite, the Old English
          Sheepdog. Beneath the coats, Beardies are the more lean and angular of the two. The lavish facial hair
          shouldn't obscure the characteristic expression: a dreamy, faraway gaze. These rambunctious comics can
          be a handful'¿but mostly, Beardies are approximately 50 pounds of heart, energy, and laughter.
          Well-socialized Beardies will get on nicely with other animals and kids. They bore easily, and training
          must be kept interesting. Outdoorsy families looking for a sturdy dog to share an uptempo lifestyle will
          never find a more affectionate and amusing sidekick.</p>
      </div>
      <div className="dog">
        <img src={dog1} alt="Pekingese"/>
        <h2>Pekingese</h2>
        <p>The Pekingese, a compact toy companion of regal bearing and a distinctive rolling gait, is one of several
          breeds created for the ruling classes of ancient China. These are sophisticated dogs of undying loyalty and
          many subtle delights. Pekingese are compact, stocky toy dogs weighing up to 14 pounds. The coat is longest
          at the neck and shoulders, giving Pekes their famous 'lion's mane.' Coats come in various reds, from a
          golden-red to darker shades. The large, short-muzzled head is a wider-than-long 'envelope shaped' rectangle,
          and the eyes are large, dark, and sparkly. A unique feature of Pekes is their effortless 'rolling' gait.
          Pekes are charming, confident companions who develop a tight bond with their favorite human. Bred to live
          in palaces, they can be as serenely independent as the emperors who owned them. (They're 'opinionated,'
          Peke people say.) Ever alert, they make good watchdogs. Pekes will tolerate kids but won't stand for a lot
          of roughhousing.</p>
      </div>
      <div className="dog">
        <img src={dog7} alt="Dalmatian"/>
        <h2>Dalmatian</h2>
        <p>The dignified Dalmatian, dogdom's citizen of the world, is famed for his spotted coat and unique job
          description. During their long history, these "coach dogs" have accompanied the horse-drawn rigs of
          nobles, gypsies, and firefighters. The Dalmatian's delightful, eye-catching spots of black or liver
          adorn one of the most distinctive coats in the animal kingdom. Beneath the spots is a graceful,
          elegantly proportioned trotting dog standing between 19 and 23 inches at the shoulder. Dals are
          muscular, built to go the distance; the powerful hindquarters provide the drive behind the smooth,
          effortless gait. The Dal was originally bred to guard horses and coaches, and some of the old protective
          instinct remains. Reserved and dignified, Dals can be aloof with strangers and are dependable watchdogs.
          With their preferred humans, Dals are bright, loyal, and loving house dogs. They are strong, active
          athletes with great stamina'¿a wonderful partner for runners and hikers.</p>
      </div>
      <div className="dog">
        <img src={dog3} alt="Rottweiler"/>
        <h2>Rottweiler</h2>
        <p>The Rottweiler is a robust working breed of great strength descended from the mastiffs of the Roman
          legions. A gentle playmate and protector within the family circle, the Rottie observes the outside world
          with a self-assured aloofness. A male Rottweiler will stand anywhere from 24 to 27 muscular inches at
          the shoulder; females run a bit smaller and lighter. The glistening, short black coat with smart rust
          markings add to the picture of imposing strength. A thickly muscled hindquarters powers the Rottie's
          effortless trotting gait. A well-bred and properly raised Rottie will be calm and confident, courageous
          but not unduly aggressive. The aloof demeanor these world-class guardians present to outsiders belies
          the playfulness, and downright silliness, that endear Rotties to their loved ones. (No one told the
          Rottie he's not a toy breed, so he is liable plop onto your lap for a cuddle.) Early training and
          socialization will harness a Rottie's territorial instincts in a positive way.</p>
      </div>
    </div>


  )
}


export default DogedexPage

