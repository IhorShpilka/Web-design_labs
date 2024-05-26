const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const posts = {
    dog: {
        date: 'Feb 16, 2024',
        description: 'J1.Size of Your House:\n' +
            '\n' +
            'If you live in a small apartment or have limited space, consider smaller breeds such as Chihuahuas, Pugs, or French Bulldogs. These breeds are well-suited to indoor living and require less space to roam.\n' +
            '\n' +
            'For those with larger homes or access to outdoor areas, larger breeds like Labrador Retrievers, Golden Retrievers, or German Shepherds may be more suitable. These breeds thrive with ample space to exercise and explore.\n' +
            '\n' +
            '2. Time Commitment:\n' +
            '\n' +
            'Assess how much time you can realistically dedicate to caring for a dog. If you have a busy schedule and limited time for walks and play, consider low-maintenance breeds such as Basset Hounds, Greyhounds, or Cavalier King Charles Spaniels. These breeds typically require less exercise and grooming.\n' +
            '\n' +
            'If you have plenty of time to spare and enjoy being active with your pet, consider breeds that thrive on exercise and mental stimulation, such as Border Collies, Australian Shepherds, or Jack Russell Terriers. These breeds excel in activities like agility training and hiking.\n' +
            '\n' +
            '3. Preferred Character:\n' +
            '\n' +
            'Think about the temperament and personality traits you desire in a dog. Are you looking for a loyal and affectionate companion, a playful and energetic partner, or a calm and easygoing pet?\n' +
            '\n' +
            'Breeds like Labrador Retrievers, Golden Retrievers, and Beagles are known for their friendly and sociable nature, making them great family pets.\n' +
            '\n' +
            'If you prefer independent and less demanding breeds, consider options like Shiba Inus, Basenjis, or Afghan Hounds, which are known for their aloof yet dignified demeanor.'
    },
    eng: {
        date: 'Feb 13, 2024',
        destination: 'Experienced teachers say that the best way to master a skill is practice. That is why it is worth giving her as much time as possible. The optimal ratio is called 20/80, reflecting the idea that 20% of the effort leads to 80% of the results. This principle applies across various domains, from learning a musical instrument to mastering a new language.\n' +
            '\n' +
            'To delve deeper into this concept, let\'s consider the implications for skill development. The initial phase of learning often involves a steep learning curve, where progress seems slow and effort-intensive. However, as one gains familiarity and proficiency with the skill, the rate of improvement tends to accelerate. This acceleration can be attributed to the consolidation of fundamental concepts and the development of muscle memory, cognitive patterns, and problem-solving strategies.\n' +
            '\n' +
            'Moreover, consistent practice is crucial for skill retention and refinement. Repetition reinforces neural pathways in the brain, facilitating smoother execution and quicker decision-making. Through deliberate practice, individuals can identify weaknesses, experiment with different approaches, and progressively refine their techniques.\n' +
            '\n' +
            'Furthermore, the 20/80 principle underscores the importance of prioritizing tasks and focusing on high-impact activities. Rather than spreading oneself too thin across numerous tasks, it\'s more effective to allocate time and resources to the most critical aspects of skill development. By identifying key areas of improvement and dedicating focused practice sessions to them, learners can maximize their progress and achieve mastery more efficiently.\n'
    },
    fruit: {
        date: 'Feb 29, 2024',
        destination: 'Fruits are not just a delicious addition to our diet but also a crucial component of a healthy lifestyle. They are rich in vitamins, minerals, and antioxidants that contribute to overall health and well-being.\n' +
            '\n' +
            'One of the primary advantages of consuming fruits is their high content of vitamin C, which is a powerful antioxidant. It helps combat stress and boosts immunity, protecting the body from illnesses. Moreover, vitamin C promotes healthy skin, hair, and nails, preserving their beauty and strength.\n' +
            '\n' +
            'Another important component of fruits is dietary fiber, which aids in normalizing the digestive system. It supports gastrointestinal health, reduces the risk of constipation, and alleviates other stomach issues.\n' +
            '\n' +
            'Additionally, fruits contain various minerals such as potassium, calcium, and magnesium, which are necessary for maintaining bone, heart, and muscle health. Potassium, for instance, helps lower blood pressure and supports heart function.\n' +
            '\n' +
            'Therefore, regular consumption of fruits is a vital element of a balanced diet and contributes to overall strengthening of the body. Incorporate a variety of fruits into your daily diet, and your health will thank you for it!'
    }
};
app.get('/posts/:post', (req, res) => {
    const post = req.params.post.toLowerCase();
    if (posts[post]) {
        res.json(posts[post]);
    } else {
        res.status(404).json({ error: 'Not found' });
    }
});

app.listen(port, () => {});




