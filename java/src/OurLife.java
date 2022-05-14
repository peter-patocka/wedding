import universe.Life;

/**
 * This is just one of the many, many, many objects.
 */
abstract class OurLife extends Life {

    private Person bride;
    private Person groom;

    // private constructor, wtf? How to initialize life?
    private OurLife() {
        groom = new Person("Peter Patočka");
        bride = new Person("Lucia Lászlóová");
    }

    /**
     * Execute wedding day. The bride and the groom will live together, as a married couple.
     *
     * Wedding day: 📅 10. 6. 2022, 11:00
     * Location: ⛴ Loď Harmónia, Fajnorovo nábrežie 2, Bratislava
     *
     * @see <a href="http://patocka.sk/wedding/">Wedding page</a>
     */
    public void wedding() {
        if (acceptWedding(groom) && acceptWedding(bride)) {
            groom.setMarried(bride);
            bride.setMarried(groom);

            try {
                liveHappilyEverAfter(bride, groom);
            } catch (PersonDiedException personDiedException) {
                Person personWhoDied = personDiedException.getPerson();

                throwStuffToBin(personWhoDied);

                if (personWhoDied == groom || personWhoDied == bride) {
                    groom.setMarried(null);
                    bride.setMarried(null);
                }
            }
        } else {
            new Thread(() -> doSomething(bride)).start();
            new Thread(() -> doSomething(groom)).start();
        }
    }

    // ...

    protected abstract boolean acceptWedding(Person person);
    protected abstract void throwStuffToBin(Person person);
    protected abstract void liveHappilyEverAfter(Person ... persons) throws PersonDiedException;
    protected abstract void doSomething(Person person);
}
