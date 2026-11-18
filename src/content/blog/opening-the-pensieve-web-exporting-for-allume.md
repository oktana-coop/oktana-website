---
slug: opening-the-pensieve-web-exporting-for-allume
title: 'Opening the Pensieve: Web Exporting for Allume'
description: 'Introducing our web exporting tool for Allume. Along the way, we explore how tools for thought can represent and structure ideas and knowledge better, and also the tension between thinking in private and in public.'
status: 'published'
createdAt: '2026-11-17'
updatedAt: '2026-11-17'
publishedAt: '2026-11-17'
---

# Opening the Pensieve: Web Exporting for Allume

> Human action, or even human thought, can only take place through some kind of material medium and therefore can't be understood without taking the qualities of that medium into account.
>
> David Graeber [^1] 

As also discussed in our [v2 editor manifesto](https://oktana.dev/blog/v2-manifesto/#composability 'v2 editor manifesto'), we envision a future where people are not confined to a single tool when creating knowledge. Tool interoperability and composition, especially among applications where users have real agency over their data, can result in an _ecosystem_ of apps that truly augment and help the activity itself while staying humble and not trying to monopolize it or enclose its product. Deep thinking and ideation within a distraction-free environment is a core part of knowledge work and, in our opinion, [Allume](https://allume.com 'Allume') (formerly Muse) is one of the most interesting and innovative tools where this can happen. This is why we are excited to introduce a [companion tool](https://github.com/oktana-coop/allume-web-export 'companion tool') that helps users export their Allume boards for the web, which then makes it easy to either publish a static website with the content or embed it in other websites or web applications. An example of the output of the tool is available at the [Fragments & Flows](https://fragmentsandflows.com/garden/boards/home-l0tzup/ 'Fragments & Flows') digital garden, where it has been embedded. As usage instructions are available in the docs accompanying the tool on GitHub, in this post we will briefly describe how we use Allume ourselves and the ways it (and the team behind it) has been influential to our work, along with what we believe the tool we developed adds.

## Embracing the Messiness of Thinking

Thinking is messy and forming ideas or cultivating knowledge is a process that is not necessarily continuous or systematic; it may take a break, an environment switch, a stimulating conversation, a walk or a good sleep to process the creative fodder in our minds and solve a problem [^2] [^3]. Tools like Allume embrace these aspects of how we think and create; they make it easy to capture fleeting, raw or unfinished thoughts and combine them with stimuli coming from books or web content, without imposing a hierarchical structure or linear representation beforehand. By grouping and linking material, structure emerges as ideas mesh and evolve.

We don\'t want to claim that Allume\'s philosophy and its underlying principles, in many ways unique, are what all tools for thought should endorse. We understand, rather, that it is indeed opinionated and that one have to embrace at least the non-linear way of curating their thoughts to love it (like we do!). Allume was built upon exciting research in human-computer interaction within the Ink & Switch research lab [^4] [^5] and as a result its features include very interesting experiments. Among them, the ones that excite us the most are those related to how we think and how tools shape the thinking and creative process itself.

### Multi-Media Representation and Spatial Reasoning

One of the core assumptions behind Allume is that human thought is inherently multimedia (e.g. it\'s never just text or just images and it uses input from multiple senses and functions) and that the primary reasons this is not expressed properly in digital tools has been historical and constrained by economic factors [^6]. This has recently changed with the advent of canvas tools which allow users to put different types of media side by side and therefore are better aligned to how our mind works, starting in design tools (e.g. Figma) but increasingly expanding in other domains. This is especially important for the process of ideation, where ideas are not yet fully developed, even if the end artifact is a single-media one (e.g. plain text).

<figure class="wide">
  <img
    src="/assets/opening-the-pensieve-web-exporting-for-allume/allume-multi-media.png"
    alt="Multiple media types in Allume"
    width="1339"
    height="1064"
    loading="lazy"
    decoding="async"
  >
  <figcaption>Mixing text, ink and images in Allume.</figcaption>
</figure>

Another core idea behind Allume is that there is a powerful part of human brain which has evolved to navigate spaces in the real world, and that digital tools can tap into this using design techniques. To the extent that they feel like a place and allow us to spatially navigate around, they feel more familiar and inviting [^7]. On the other hand, this can admittedly be challenging for users after years of operating in tools that enforce linear thinking. There is also a matter of personal preference here --- not all people love arranging their thinking material spatially. For us, two aspects of it have worked particularly well. The first is the pattern of creating _affinity maps_ [^8], where you have some problem space you want to navigate and the strategy is to first lay out raw content and then try to bring related data or thoughts closer together (nearness or grouping into a board can suggest or denote affinity). This is especially powerful with the added capability of _linking_ content / cards, as the same atomic unit can be a part of many affinity maps addressing different problem spaces or concerns. We will expand on linking when we talk about structure below. The second is the _board nesting_ experience. There are many infinite canvas tools out there but we are not aware of any other that allows this type of nesting with layers that the team behind Allume designed. Boards can group related content together and nesting makes it easy to zoom in or out of _different levels of thinking about a problem_ since it\'s just a matter of some gestures and key presses.

### Heterarchical and Emergent Structure

The computer, as a dynamic medium, can display and manage changing content, be interactive and adaptive to input, and in general offer flexibility that hasn\'t been possible with static media like paper. This dynamic nature enables workflows that allow gradually evolving an artifact from an initial idea to a polished or published artifact, potentially leveraging and composing a pipeline of tools within the same medium. To make it more concrete, when writing an essay, one could do the brainstorming, ideation and initial sketches of it in a tool like Allume or Obsidian, then take it to a tool that is more specialized in writing like v2, and then potentially to another one that\'s specialized in styling and publishing. Crucially, when it comes to formats, there is a tension between ones that facilitate ideation and those that are more suitable to publishing or long-term persistence. Allume has been thoughtfully designed to allow for this continuous evolution of ideas. For example, it is a deliberate design decision that the user can start adding content without putting a title on it, which is rooted in the idea that naming is an action or a milestone that comes with understanding and elucidation. Along similar lines, it makes it really easy to restructure content (for example, group existing cards within a board) so that the user can refine their thinking. By grouping, linking and annotating as content gets added and curated, structure _emerges_ instead of being predefined.

<figure class="wide">
  <video controls preload="metadata" playsinline width="2560" height="1440">
    <source src="/assets/opening-the-pensieve-web-exporting-for-allume/allume-create-board-from-cards.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption>Grouping cards into a new board in Allume.</figcaption>
</figure>

Ideas and knowledge can\'t be divided and organized neatly in a hierarchy [^9], and yet there are times where hierarchies help us organize our thoughts, so there is a tension at play here. The way Allume resolves this tension is using [linked cards](https://allume.com/memos/2022-09-linked-cards/ 'linked cards'), which allow the user to connect boards and cards living in different corners of their thinking space. Linked cards are identical and tied together by locations. All linked cards are equal in rank; there's no "original" card. And as the spatial component is core to Allume, we can think of navigating between linked cards as location switching [^10]. Linked cards enable the user to _break out of purely hierarchical structures_ and in practice this often results in creating [heterarchies](https://en.wikipedia.org/wiki/Heterarchy 'heterarchies'), where content is organized through different, equally legitimate contexts. The structures created can become complex but, using contextual menus and a slick animation, the app ensures that the sense of orientation is not lost and that context switching is seamless.

<figure class="wide">
  <video controls preload="metadata" playsinline width="2560" height="1440">
    <source src="/assets/opening-the-pensieve-web-exporting-for-allume/allume-linked-cards-navigation.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption>Linked cards navigation in Allume. Notice how the same card belongs to two hierarchies.</figcaption>
</figure>

## Thinking in Private and in Public

Creating something new is a very vulnerable act in which privacy is one of the most important requirements. The guarantee of privacy, especially in the early stages of developing a knowledge artifact, is something that can really free up creativity, and this is something which modern enterprise software often fall short on [^11] [^12]. We like to think of Allume as a [Pensieve](https://harrypotter.fandom.com/wiki/Pensieve 'Pensieve'), a calm sanctuary where we can capture, ruminate on and gradually elucidate our thoughts.

On the other hand, an important part of the thinking and creative process is certainly a social activity, and opening up the creative process in a relatively early stage can create really fertile conversations and feedback. So there is an interesting tension here between being able to work in private and also share a piece of work early enough to create a sort of dialogue or feedback loop with people interested in it. More often than not, the way products of thinking and reflection are usually presented to us can create the illusion that thinking and reflection follow a well-ordered and systematic logical process:

> \[...\] in the case of a work of reflection, removing the scaffolding and clean up the area around the building not only is no benefit to the reader, but deprives him of something essential. Unlike the work of art, there is no finished edifice here, nor an edifice to be finished; just as much, and even more with the results, what is important is the work of reflection and it is perhaps mostly this that an author can make us see, if he can make us see anything at all. Presenting the result as a systematic and polished totality, which in truth it never is; or even presenting the construction process --- as is often the case, pedagogically but erroneously, in so many philosophical works --- in the form of a well-ordered and wholly-mastered logical process, can only serve to reinforce in the reader the disastrous illusion towards which he, like all of us, is already naturally inclined, that the edifice was constructed for him and that he has only, if he so desires, to move in and live there. Thinking is not building cathedrals or composing symphonies. If the symphony exists, it is the reader who must create it in his own ears.
>
> Cornelius Castoriadis [^13] 

This idea of thinking and learning in public is a core part of [digital gardening](https://maggieappleton.com/garden-history 'digital gardening'), whose much of the culture an ethos is publishing and tendering work that is in progress. Unlike blogs, which usually present polished articles sorted by their publication date, digital gardens are inherently exploratory and places where people publish unfinished thoughts growing and evolving over time. We like the idea behind digital gardens, as we think it can create more authentic and less performative experiences in the web, ones where the audience ends up participating earlier in the process with ideas and shapes them. The web exporting tool for Allume that we developed will enable its community members to create or enrich their digital gardens with thoughts they feel comfortable to share and open up to a wider audience. The input to this tool is a given Allume board (and not necessarily their whole workspace), which lets users explicitly select which part of their corpus they want to share. We believe this is the sweet spot in resolving the aforementioned tension, as it is an experience in which consent flows from the user interface action itself [^14].

## Final Thoughts & a Call for Support

For us, Allume has from its first steps as Muse been a statement that computing can be different: A manifestation of tools that reject the noisy and spammy character of computing in our days, with a statutory goal of enhancing the thinking process and staying out of the way when required. The team behind Allume has to a big extent been thinking and working in public during this effort, primarily through the Metamuse podcast cited many times in this post, but also through its receptiveness and interaction with the community via instant messaging. These are the reasons that their work has been very influential to us. The extra angle we want to bring is about creating tools that are oriented towards the commons and treat knowledge as such. The Allume web exporting tool we are announcing today is part of this, manifested both in its license (AGPL) and in the potential of sharing knowledge and thoughts currently existing within Allume boards to the open ecosystem of the web.

If you like our work and vision, please consider [supporting us financially](https://oktana.dev/#support 'supporting us financially') so that we can do more of this. We statutorily do not accept venture capital investment so that we stay independent and our resources are currently limited and based on personal savings from previous work we\'ve undertaken. It would be amazing for us to reach a point where our work is community-funded as we plan to de-commodify knowledge production as much as possible and organize with like-minded people and initiatives.

[^1]: David Graeber, Toward an Anthropological Theory of Value (Palgrave, 2001), p.83

[^2]: Adam Wiggins, Mark McGranaghan, Metamuse Episode 2, Having Good Ideas, podcast audio, April 16, 2020, https://allume.com/podcast/2-having-good-ideas/.

[^3]: Mark McGranaghan, Adam Wiggins, Metamuse Episode 10, Tools for Thought, 00:12:40, podcast audio, August 07, 2020, https://allume.com/podcast/10-tools-for-thought/.

[^4]: Adam Wiggins, Peter van Hardenberg, Mark McGranaghan, Matt Tognetti et al., December 2018, Capstone, A tablet for thinking. https://www.inkandswitch.com/capstone/.

[^5]: Mark McGranaghan, Gökçen Keskin, Adam Wiggins, Julia Roggatz, April 2019. Muse, Designing a Studio for Ideas. https://www.inkandswitch.com/muse/.

[^6]: Mark McGranaghan, Anne-Laure Le Cunff, Adam Wiggins, Metamuse Episode 20, Thinking in maps with Anne-Laure Le Cunff, 00:31:09, podcast audio, December 2020, https://allume.com/podcast/20-thinking-in-maps.

[^7]: Adam Wiggins, Mark McGranaghan, Metamuse Episode 21, Listeners Questions, 00:10:06, podcast audio, January 2021, https://allume.com/podcast/21-listener-questions.

[^8]: Adam Wiggins, Mark McGranaghan, Anne-Laure Le Cunff, Metamuse Episode 20, Thinking in maps with Anne-Laure Le Cunff, 00:50:55, podcast audio, December 2020, https://allume.com/podcast/20-thinking-in-maps.

[^9]: Ted Nelson, Computer Lib/Dream Machines, Everything is Deeply Intertwingled

[^10]: Adam Wiggins, Mark McGranaghan, Metamuse Episode 74, Linking, 00:14:22, podcast audio, February 16, 2023, https://allume.com/podcast/74-linking/.

[^11]: Adam Wiggins, Mark McGranaghan, Metamuse Episode 18, Privacy, 00:05:49, podcast audio, November 26, 2020, https://allume.com/podcast/18-privacy/.

[^12]: Mark McGranaghan, Adam Wiggins, Metamuse Episode 9, The Information Age, 00:34:58, podcast audio, July 13, 2020, https://allume.com/podcast/9-the-information-age/.

[^13]: Castoriadis, The Imaginary Institution of Society (Polity Press 1987), 1-2

[^14]: Christine Lemmer-Webber, Consent-based Secure Collaboration with Spritely Goblins Object-Capabilities, February 2025, https://archive.fosdem.org/2025/schedule/event/fosdem-2025-5312-consent-based-secure-collaboration-with-spritely-goblins-object-capabilities/.
