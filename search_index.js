var documenterSearchIndex = {"docs":
[{"location":"quantum_harmonic_oscillator/#Quantum-Harmonic-Oscillator-as-a-training-material-for-young-theoretical-chemists","page":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","title":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","text":"","category":"section"},{"location":"quantum_harmonic_oscillator/","page":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","title":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","text":"As I know, a lot of famous universities in North America and Europe train their young scientist with pretty hard jobs.  It is not always the same situation here in China, oh, mainland of it.","category":"page"},{"location":"quantum_harmonic_oscillator/","page":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","title":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","text":"In China, the courses are often limited to 'introduction'.  Most of the professors introduce the basic ideas of the subject, and the students finish the exercises in the textbook, which is aims at the graduate school entrance examination.   However, in the famous universities, the homework can be very difficult to solve, and often need the students to finish some reading tasks and some programming.  The place where I got the idea is OCW of many universities like MIT.  A good example is list here(Professor So Hirata's page).","category":"page"},{"location":"quantum_harmonic_oscillator/","page":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","title":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","text":"I am now a Ph. D. candidate and I need help my professor train young graduate students.  Actually, in the future, when I have my own team (although perhaps I could spoil that...), I need train my own students.  What should I do?","category":"page"},{"location":"quantum_harmonic_oscillator/","page":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","title":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","text":"Here is my plan.  As I am working on Theoretical Chemistry in the 21st century, my students need to know how to program.  So I look into the textbook of spectroscopy, in which field I am making efforts, to find the good examples for the primers.  Quantum Harmonic Oscillator is a good example to train programming for several reasons. (a) You do not need a eigensolver, which is always hard for guys of chemistry major, to know its eigenvalue and eigenfunction (of course we are talking about Hamiltonian here); (b) The eigenfunction is analytically available . However, to get the function, a subroutine to calculate the Hermite polynomials, which a sets of unlimited number orthogonal functions with recursion relation; (c) To finish the job, all the important syntaxes in FORTRAN are used.  Yes, we still use FORTRAN. But I think it is not a big deal if you want to use another language.  As I am informed, python is one of the most popular programming languages in science education.  One more thing is that the finished subroutines, the eigenfunctions of harmonic oscillator, can be used as the basis set to solve 1D quantum oscillator, although the main method we use in Li group is sinc DVR. ","category":"page"},{"location":"quantum_harmonic_oscillator/","page":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","title":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","text":"The job I gave the younger students is composing a program to draw the picture like the one on Wikipedia.","category":"page"},{"location":"quantum_harmonic_oscillator/","page":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","title":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","text":"I ask my young lab mates to finish the job by Friday.  I will give an example here after that here on my blog.  Notice that the visualization codes are not needed. They just need to work out the input file of some plot tools.  I do not want to make the job too hard.  I also tell them that maybe they can just work out the first five functions instead of the general one (again, less hard problem, but it is for primers).","category":"page"},{"location":"quantum_harmonic_oscillator/","page":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","title":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","text":"I wish them good luck.  I will post my program here, although it will not be the best solution.","category":"page"},{"location":"quantum_harmonic_oscillator/","page":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","title":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","text":"","category":"page"},{"location":"quantum_harmonic_oscillator/","page":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","title":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","text":"Sevaral days later...","category":"page"},{"location":"quantum_harmonic_oscillator/","page":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","title":"Quantum Harmonic Oscillator as a training material for young theoretical chemists","text":"The codes is available here.","category":"page"},{"location":"julia_docs/#我是如何使用-Documenter.jl-来搭建这个网站的","page":"我是如何使用 Documenter.jl 来搭建这个网站的","title":"我是如何使用 Documenter.jl 来搭建这个网站的","text":"","category":"section"},{"location":"julia_docs/","page":"我是如何使用 Documenter.jl 来搭建这个网站的","title":"我是如何使用 Documenter.jl 来搭建这个网站的","text":"多年前，人们流行写博客。于是我也写博客。","category":"page"},{"location":"julia_docs/","page":"我是如何使用 Documenter.jl 来搭建这个网站的","title":"我是如何使用 Documenter.jl 来搭建这个网站的","text":"现在，人们讲究“碎片化”，我本来也是想写一些博客。用了一段时间的这样那样的博客系统。但是我一无写日记之习惯，二觉得按照时间来组织内容是十分无聊的事情。我本质上不想做那种有时效性的事，所以我的需求是做一个以文本为主要内容的静态同站，而不是博客。我也看了很多静态网站的生成器，但没有特别满意的。","category":"page"},{"location":"julia_docs/","page":"我是如何使用 Documenter.jl 来搭建这个网站的","title":"我是如何使用 Documenter.jl 来搭建这个网站的","text":"Python的静态网站生成器，如Pelican之流，我是用过的。但本人的确不喜欢 Python。C语言系的Doxygen太丑……其他语言又不懂。最近开始用Julia写一些项目，很顺手。Julia里的文档生成器是Documenter.jl，生成的网站 算是不会看腻的风格，语法又是 Markdown,算比较熟悉的语法。","category":"page"},{"location":"julia_docs/","page":"我是如何使用 Documenter.jl 来搭建这个网站的","title":"我是如何使用 Documenter.jl 来搭建这个网站的","text":"Documenter.jl 很好，但还是有一些坑可能会被踩中。但还好坑比较少。如果一切顺利的话，用这个工具去做一个课程网站也是很顺手的，以后工作中可以试试看。","category":"page"},{"location":"julia_docs/#基本思想","page":"我是如何使用 Documenter.jl 来搭建这个网站的","title":"基本思想","text":"","category":"section"},{"location":"julia_docs/","page":"我是如何使用 Documenter.jl 来搭建这个网站的","title":"我是如何使用 Documenter.jl 来搭建这个网站的","text":"基本思想还是不要花钱。并不是说多么抠门，而是花了钱反而会闹得很不愉快。去租VPS也会遇到网络攻击、广告等等问题，要是用现成的服务又常常有交一辈子钱结果人家说散伙不做了这种尴尬的事情发生。加之我十分讨厌被平台绑架。 而如果咬定了一分钱不能花的思想，自然就会选择 GitHub Pages。 额外的好处是可以自己控制自己的内容。当然，除了GitHub的服务，也可以选择别家，例如国内的那几家。","category":"page"},{"location":"julia_docs/#安装工具","page":"我是如何使用 Documenter.jl 来搭建这个网站的","title":"安装工具","text":"","category":"section"},{"location":"julia_docs/","page":"我是如何使用 Documenter.jl 来搭建这个网站的","title":"我是如何使用 Documenter.jl 来搭建这个网站的","text":"首先安装 Julia ，这没有什么可以说明的，在官方网站上下载就好了。但是如果你是 Windows用户，你最好是在你的WSL里装 Linux 的版本，因为下文我会用 make 来生成 文件，如果是在 Windows 下这些工具又要配一次，很麻烦。","category":"page"},{"location":"julia_docs/","page":"我是如何使用 Documenter.jl 来搭建这个网站的","title":"我是如何使用 Documenter.jl 来搭建这个网站的","text":"安装好 Julia 后，进入它的REPL,按下 ] (右方括号），就进入了它的包管理器，然后打 add Documenter，回车。等等网络，主工具就安装好了。 另外有个小工具ghp-import，可以用也管理器安装，如在Manjaro下，pacman -S python-ghp-import。","category":"page"},{"location":"cowriting_sop/#团队技术写作标准作业流程","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"","category":"section"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"技术写作（Technical Writing）贯穿每一个科研人员的职业生涯：基金评审靠它，论文发表靠它，总结报告还靠它。其核心是通过清晰明确的描述事实说服潜在读者接纳你的观点。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"标准作业流程（Standard Operating Procedure，SOP）对于团队运行的重要性也无需多言。SOP可以使得团队高效率、准确地运转，在事前有底气，在事后可回顾，经验教训可以通过对SOP的修订传承下去，而这一切的成本都可以降到最低。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"大型文档的写作很难靠单人完成，不仅是因为工作量巨大，更是因为在工作中每个人的专长和负责的研究内容不同，让专家写其专业更容易写出高质量的文档，也可以为其中细节的正确性负责。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"本文的讲述重点是团队技术写作。这意味着本文会涵盖团队合作写作的要领，而不会刻意涵盖语法规范、写作技巧、软件使用方法、某部门文档标准。也就是说，你如果本身写作技巧很糟糕、软件用得很不规范、不阅读收稿机构的说明，在阅读本文后依然有很大概率写出失败的文档。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"本文不会教你如何做科研：科学研究本身没有 SOP，任何科研人员都应该竭尽全力探索未知，而不是循着任何现有方式做常规工作。","category":"page"},{"location":"cowriting_sop/#事先准备","page":"团队技术写作标准作业流程","title":"事先准备","text":"","category":"section"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"正如前文所述，本文不会教你如何做科研。当你写一篇学术论文前，你当然应该保证该做的实验都基本完成，数据能够证明你的结论；当你写一篇项目申请的时候，你当然应该充分了解过该领域研究现状，乃至做好早期研究。尤其是主要负责人，应该对科学技术逻辑比较清楚。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"充分理解收稿机构的所有政策文件和辅助材料，尤其是对于新政策要仔细把握，不要因为曾经有过同机构的申请/投稿经验就麻痹大意。有必要时请获取（或自制）自查表（checklist）。部分涉及行政的事项应提前安排。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"搞清楚收稿截止日期，建议在截止日期前3天完工，以预留充足的机动时间。同一时间是否有比写作更重要的事或不得不做的事，如你或团队成员需要写其他文件，需要出差，需要上课……做好统筹安排，无论是时间上的还是人事上的。","category":"page"},{"location":"cowriting_sop/#准备提纲","page":"团队技术写作标准作业流程","title":"准备提纲","text":"","category":"section"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"往往收稿机构会为你准备一个提纲，但这种提纲往往是十分粗糙的，仅具有形式审查的意义。例如，申请中国国家自然科学基金（NSFC）必须按照基金委提供的提纲编写申请书正文。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"此外，写作团队需要依据上述官方提纲编写一个足够细化的提纲。该提纲应该可以体现文本的主要逻辑和关键细节。例如，国内外工作现状是怎样的，主要有什么问题，对于这些问题我们的改进方案是什么，经典使用例等。该提纲必须成文，但无需很正式，体现出关键词即可，同时应指出各部分大约的篇幅。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"提纲应由主要负责人起草，主要负责人经验较少时，应由较资深成员协助，交写作团队全体会议严格讨论其逻辑是否有问题，研究是否有科学价值，是否容易通过等。尤其注意当指出现存研究问题时，不可言出无据，犯稻草人谬误，要知道，审稿人的研究很有可能正在被你批评。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"大纲讨论越充分，后面的写作和修改环节越轻松。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"一般文档的提纲大约需要3个工作日定稿。如项目规模很大，应在3日内做好总体提纲，各课题（子项目）交各负责人进一步内部讨论。","category":"page"},{"location":"cowriting_sop/#任务分配与快速写作","page":"团队技术写作标准作业流程","title":"任务分配与快速写作","text":"","category":"section"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"讨论好提纲后，应按照人员研究专长进行任务分配。不涉及专长的部分，应由主要负责人自己完成或指派任务较轻者完成。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"任务分配时应参照写作篇幅合理安排工作时间。写自己懂的部分实际上是非常迅速的，甚至由于写得过于兴奋而超过字数限制。因此，不要因为一个技术专家的写作速度有欠缺就提出换人写，应该想办法帮助进一步分解问题，卸下其思想包袱。但同时要意识到科技写作十分强调事实查核，引用参考文献是十分耗时的。此处不负责任地推测一个一般水平的写作者的产量以汉字记约为 2000 - 2500 字/工作日。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"任务分配时应确保写作团队成员充分了解大纲精神，尤其是充分了解自己的写作内容和写作目标。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"任务分配的结果应记载在大纲上。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"在此阶段，不应要求文本质量，对于格式、语病、错别字、语言风格等问题应当容忍，以内容为中心，核心任务是丰富提纲，为总体逻辑提供支持性细节，并尽量保证科学逻辑无误。写作篇幅可比原要求略长些，如要求篇幅在 2000 字，可写 2500 字以备后期修改、取舍。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"注意，很多人负责人会觉得让分管专家写得越长越好，这是错误的，这样只会在累死写作者的同时得到一份缺乏重点的垃圾文本。应该把重点明确在大纲里，交给专家围绕主题展开。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"总体目标是迅速拿出初稿供集体讨论，无论任务多艰巨，也应该当在1周以内完成。如果原则上办不到，你需要考虑一下你的团队规模问题。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"在此过程中，遇到任何科学上的问题及写不下去的情况，务必及时提出，早讨论，早解决。","category":"page"},{"location":"cowriting_sop/#反复修改","page":"团队技术写作标准作业流程","title":"反复修改","text":"","category":"section"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"好文章是改出来的。修改大体分为三阶段，这三阶段的顺序千万不要错。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"粗修 在本阶段，应当通过阅读找出文本的逻辑和证据等的问题。迅速定位问题，并迅速解决。例如，部分段落整体逻辑有问题、叙事顺序不通畅、参考文献不充足等均在此阶段指出。此阶段应注重交叉检查，即由团队中的其他成员检查专家写作的内容，从而确保“大同行”能够理解专家的文本。\n细修 检讨语言上的问题，使全文读起来风格统一，前后一致，如相同的研究背景不需要在每个段落都提及。这一工作只能由一个人完成，否则会文风混乱。\n精修 所有人员共同查验文本的各种语言、排版等细节问题，确保没有任何细节问题。注重交叉检查。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"修改阶段应保证每个工作日至少生成1个新版本，以减少重复劳动和修改冲突。修改直到收敛。 对于项目申请书，尤其注意摘要、关键科学问题、结论等关键部分。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"该步骤的时间很难确定，尤其是粗修一步往往会导致大篇幅返工（令人悲伤的是，基本上很难确保每一个人都真的会遵守本SOP）。但基本上应留足至少1周时间。","category":"page"},{"location":"cowriting_sop/#提交文档","page":"团队技术写作标准作业流程","title":"提交文档","text":"","category":"section"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"提交前确保再次通读文档，确保没有可见错误。确保在截止日期前递交。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"递交后应睡个好觉。","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"修改日志","category":"page"},{"location":"cowriting_sop/","page":"团队技术写作标准作业流程","title":"团队技术写作标准作业流程","text":"2020-04-09 第一版。\n2021-03-24 第二版。\n2022-05-06 第三版。 ","category":"page"},{"location":"ydvr/#ydvr:-A-C-implement-of-DVR-method","page":"ydvr: A C++ implement of DVR method","title":"ydvr: A C++ implement of DVR method","text":"","category":"section"},{"location":"ydvr/","page":"ydvr: A C++ implement of DVR method","title":"ydvr: A C++ implement of DVR method","text":"DVR method is an important method to deal with the nuclear motion problem.  In the old days, Fortran is used to write almost all the scientific computation codes.  However, Fortran is dead.","category":"page"},{"location":"ydvr/","page":"ydvr: A C++ implement of DVR method","title":"ydvr: A C++ implement of DVR method","text":"Recently, people has been able to code in more powerful and popular language like Python and Matlab.  That's good.  But personally I do not like Matlab because it is not a open standard or python because of the indent syntax and the difference between py2 and py3.","category":"page"},{"location":"ydvr/","page":"ydvr: A C++ implement of DVR method","title":"ydvr: A C++ implement of DVR method","text":"C++, however, is an 'old' language but still very important these days.  I mean, you can still find a lot of scientific libraries in C++ and because it is one of the most important systematical language it cannot die in the near future.  C++ is object-oriented so it is easier to be reused by other guys.","category":"page"},{"location":"ydvr/","page":"ydvr: A C++ implement of DVR method","title":"ydvr: A C++ implement of DVR method","text":"So when I had the will to rebuild a DVR code I think C++ is a good choice.  Besides, I came up a 'new' trick for PODVR (actually not new: it is directly from the original paper of PODVR).  The H0 operator can actually including all the 1D Hamiltonian so that we can make the potential energy matrix the most correct, if you know the fact that in DVR, the errors are directly from the potential part because the localized basis function for a DVR point/grid are only 'quasi-localized'.  So it is necessary to rebuild the code.","category":"page"},{"location":"ydvr/","page":"ydvr: A C++ implement of DVR method","title":"ydvr: A C++ implement of DVR method","text":"You can find my codes here.","category":"page"},{"location":"ssh_tunneling/#打通内外网","page":"打通内外网","title":"打通内外网","text":"","category":"section"},{"location":"ssh_tunneling/","page":"打通内外网","title":"打通内外网","text":"很多科研单位的工作服务器是放在内网的，没有互联网连接。这让工作及其痛苦。其一，你无法使用包管理器，这导致非常严重的问题，因为别人早就可以一条 conda install 完成任务了，你还在很辛苦地配环境。更不必说有的传统的 C++ 软件，本身就要依赖这个依赖那个，别人一条apt install万事大吉了，你还在折腾。还有一种情况就是机器没问题，人不在单位，连不上内网的服务器。","category":"page"},{"location":"ssh_tunneling/","page":"打通内外网","title":"打通内外网","text":"这些问题困扰了我们很长时间。原来很多的工作还是基于传统的编译型语言的，也就一个一个编译过去得了。最近越来越多的工作落在在 Python 和 Julia 这样的语言上，对于人家有包管理器的人，包的依赖是一个套一个一个接一个的。（写FORTRAN出身的人应该很难理解为什么转个单位也要一个包。）打通内外网的界限因此成为了必须。","category":"page"},{"location":"ssh_tunneling/","page":"打通内外网","title":"打通内外网","text":"这些问题解决的总开关是端口转发，port tunneling。以下分几种情况，分类介绍。","category":"page"},{"location":"ssh_tunneling/#临时让服务器连上外网的方法","page":"打通内外网","title":"临时让服务器连上外网的方法","text":"","category":"section"},{"location":"ssh_tunneling/","page":"打通内外网","title":"打通内外网","text":"这需要让计算服务器的所有对外的流量通过代理。","category":"page"},{"location":"ssh_tunneling/","page":"打通内外网","title":"打通内外网","text":"首先在桌面端搭建代理服务器，具体地，安装Squid for Windows。这个软件可以把你的桌面（Windows 系统电脑）变成一个代理服务器。安装好以后，运行，在系统右下角托盘找到它的章鱼图标，右击编辑配置文件。在 Squid 配置文件末尾加入 http_access allow all 并重启Squid。Squid 默认监听端口是3128，需要改的话请自便（但是其实没有修改的必要）。","category":"page"},{"location":"ssh_tunneling/","page":"打通内外网","title":"打通内外网","text":"当然搭建代理服务器的方式不是只有这一种，Squid 只是单纯的把计算服务器对外的流量通过自己的桌面正常发送出去。同理你可以把这个流量通过别的信道发到别的什么地方去，例如软件经销商的升级服务器网络。","category":"page"},{"location":"ssh_tunneling/","page":"打通内外网","title":"打通内外网","text":"而在计算服务器上，你需要做这些。首先，请系统管理员用root权限修改 /etc/ssh/sshd_config ，其中 GatewayPorts 应为 yes 。如有必要重启sshd。这件事只需要做一次，所以你可以先跳过这这步，说不定管理员已经修改过了。","category":"page"},{"location":"ssh_tunneling/","page":"打通内外网","title":"打通内外网","text":"然后在你自己的.bashrc里面添加","category":"page"},{"location":"ssh_tunneling/","page":"打通内外网","title":"打通内外网","text":"export http_proxy=127.0.0.1:3129\nexport https_proxy=127.0.0.1:3129","category":"page"},{"location":"ssh_tunneling/","page":"打通内外网","title":"打通内外网","text":"这里选定了服务器端的3129端口为代理。注意和下面的远程端口转发对照。","category":"page"},{"location":"ssh_tunneling/","page":"打通内外网","title":"打通内外网","text":"接下来，打开桌面的终端。输入","category":"page"},{"location":"ssh_tunneling/","page":"打通内外网","title":"打通内外网","text":"ssh -R 3129:localhost:3128 user@server_address","category":"page"},{"location":"ssh_tunneling/","page":"打通内外网","title":"打通内外网","text":"这样可以正常登入服务器，而且建立了服务器端的3129端口到桌面的3128的通道。你当然需要自己修改你的 user 和 server_address。","category":"page"},{"location":"ssh_tunneling/","page":"打通内外网","title":"打通内外网","text":"如果一切顺利的话，你可以测试，在服务器端输入","category":"page"},{"location":"ssh_tunneling/","page":"打通内外网","title":"打通内外网","text":"curl -O https://www.zhaiysci.net/index.html","category":"page"},{"location":"ssh_tunneling/","page":"打通内外网","title":"打通内外网","text":"可以成功我网站的首页，那就证明设置成功了。你应该就可以正常使用conda之类的包管理器。","category":"page"},{"location":"ssh_tunneling/#使用-AngDesk-建立远程访问服务器终端的方法","page":"打通内外网","title":"使用 AngDesk 建立远程访问服务器终端的方法","text":"","category":"section"},{"location":"ssh_tunneling/","page":"打通内外网","title":"打通内外网","text":"这个问题我做过一个视频，可以看看。","category":"page"},{"location":"#Welcome-to-my-notes!","page":"Welcome to my notes!","title":"Welcome to my notes!","text":"","category":"section"},{"location":"","page":"Welcome to my notes!","title":"Welcome to my notes!","text":"This site contains some technical notes (and some jibber-jabber) by Yu Zhai.","category":"page"},{"location":"","page":"Welcome to my notes!","title":"Welcome to my notes!","text":"Some of them are in English, while some are in Chinese.","category":"page"},{"location":"","page":"Welcome to my notes!","title":"Welcome to my notes!","text":"... and some are useless, by all means.","category":"page"},{"location":"","page":"Welcome to my notes!","title":"Welcome to my notes!","text":"Let me know your commments on this site by create issues on GitHub.","category":"page"},{"location":"","page":"Welcome to my notes!","title":"Welcome to my notes!","text":"If not otherwise stated, the contents in this site are licensed under CC BY-NC-SA.","category":"page"}]
}
