---
authorname: Aysegul Karadan

title: "System Simulation"
img: /img/simulation/Picture1.png
date: 20/03/2023
description: "What is Modeling and  Simulation? What are the Pros and Cons of Simulation? Characterization of the Simulation Model, Model Developments Processes"
head:
  meta:
    - name: "keywords"
      content: "engineering, system simulation , industrial engineer, simulation model"

    - name: "author"
      content: "Aysegul Karadan"
sitemap:
  loc: /blog/system-simulation
---

<!-- Content of the page -->
<h1>System Simulation</h1>
<h2>System Simulation : An Introduction</h2>

<p>Simulation is a useful and powerful tool that is generally used to guide statistical practices and Simulation enables understanding and prediction of complex systems by using an imitiate model of the system [1]. Sometimes it's not easy to analyze and work with the real data. The real data may be difficult to measure, or we may not be able to access all data due to limited access. For this and similar reasons, scientists, usually statisticians, use idealized data to run the model. This model provides a logical understanding of how a real system or imitation of reality behaves. </p>

  <img src="/img/simulation/Picture1.png" width="500" height="500">

<p>The system is the process of the whole of the physical elements whose findings we want to analyze with which we are concerned.</p>
<p>Model is statistical descriptions of the activities involved(system)[2]. </p>
<p>Simulation is the imitation of the connection of the process activities involved in their architecture over time[3].</p>

<h2> Modeling</h2>

<img src="/img/simulation/Picture2.png" width="500" height="500">
• Deterministic: In deterministic modeling, the input values are certain and clear. e.g; Relationship between inputs and outputs in linear programming.
10000 chairs\* 4 chair legs = 40000 chair legs.
• Probabilistic: In probabilistic modeling, some data is uncertain and statistical probabilities are used to analyze these data. The most used probabilistic modeling for estimation and identification is the Monte Carlo method [4]. Kershebaum and others [4] studied probabilistic modeling for processes of gas and oil.
• Data types;

- Qualitative; Qualitative data can not be presented by numbers so, it can not be measured.
- Quantitative: Quantitative data divided into two
- Discrete data; Discrete data contains only certain values. For example, nursery each day, sales for the months, etc.
- Continuous data; Continuous data can be any value. Such as weight, height, width, temperature. This data type may change over time. For example, the temperature changes throughout the year. This data can be best viewed on a graph that changes over time
  • Decision Modeling Steps;
  • In any modeling, there are three basic steps that must be applied regardless of the size and complexity of the problem. These are in order;
  -Formulation; Creation of the mathematical structure of the interested system.
- Solution; The result or solution of the applied formulas from the system.
- Interpretation: The representation of the final results to analyze the expected or desired values from the system.

<h2> Linear Programming</h2>

Linear programming is the most commonly used modeling technique that helps for planning and decision-making [5]. Linear programming is a deterministic modeling type so, the data inputs and the parameters are certain. Linear programming uses basic linear algebraic equations to create a model of the system. The mathematical model can be calculated with both hands or a computer. We can optimize, maximize or minimize the function.
There are three basic elements of linear programming;
• Decision variables; X1X2….Xi the values we are trying to solve in the problem. For example; We want to calculate how many cookies we can cook pancakes by using all of the ingredients flour, eggs, milk, and sugar. In this case, our variables can be listed as;

X1= Milk

X2= Flour

X3=Egg

X4=Sugar

• Constraints; Constraints are the restrictions for our decision variables. For the previous example, If we have 1000gr of flour, 8 eggs,500 gr sugar, and 1000ml of milk. We can represent our constraints;

X1≤1000

X2≤1000

X3≤8

X4≤500

• Objective function: is the structure of the problem that aims to reach the solution. For our example, the recipe of the pancake; 200 ml milk 150 gr of flour 100 gr of sugar, 2 eggs. So our objective function can be represented as;

C= 200 X1+150 X2+2 X3+100 X4

<h2> Pros and Cons of Simulation</h2>

Pros

- Enables to compare solutions to the alternatives.
- Enables to control the experiment better than control of the real world.
- Visualizing the complex elements, relationships, etc so, enables us to understand the complex system.
- We can optimize real-world problems without working with the real world[6].

Cons

- Creation of the model can require special training.
- The result of the simulation may be hard to interpret.
- Simulation modeling and analyzing of the system can be time-consuming and expensive [7].
- Simulation may be used incorrect way.

<h2>Characterization of the Simulation Model</h2>

There are some steps for the beginning of the simulation.

1- Decide our input variables whether it is Probabilistic or Deterministic.
Our model may include certain variables(deterministic)or stochastic variables(probabilistic).

2- Decide if the model is Dynamic or Static.
If time is the significant variable for our model it is dynamic, if not then it is static.
For example; Econometrics, agent-based, system Dynamics are dynamic. Monte Carlo model, optimization models are static.
Eva [8]studied digestion system simulation by using the Dynamic Gastric Model.

3- Discrete or Continuous?

We need to decide if our model’s variables change in discrete points in time or variables change continuously.
For example, Queuing models such as nursery, banking, or hospital service are considered as discrete events and, the temperature of the water in a tank or depth of the pool is considered as continuous that might be described by differential equations[9].

  <img src="/img/simulation/Picture3.png" width="600" height="600">

<h2>Model Developments Processes</h2>

![Alt text](/img/simulation/Picture4.png)
1- Problem Statement: Deciding what we are trying to achieve. We need to describe the goals, objectives, the main problem, etc.

2- Conceptual Model: Conceptual model is a model that is considered as a theory of the model. So, it is an idea that needs to question the scope of the model, variables ( which are dynamic/ significant for the problem.

3- Specification Model: It needs definitions/specifications of the theory. This step is a kind of proposal that needs formal notations, paper, explanations of the structure of the expected results[10].

4- Computational Model: That uses computer programs to simulate the interested system by using an algorithmic mathematical approach, for example, Victor li and others present a computational model in their study on heat treating of steels for prediction of microstructure development[10].

5- Verification: This step requires verification of computed/evaluated results and sharing new knowledge inferred in the verification section[11].

6- Validation: at this stage, assessing the suitability of the model specification, appreciating the strength of the conclusions drawn from the implemented model[12]. It shows that we had built the right model, and enables us to see diferences between model results and the system’s results.

<h2> Elements of Probability</h2>

Sample Space: A sample space is a set that , includes the possible outcomes of the certain expreriment and its represented by symbol of S[13].

Experiment: The experiment may be repeated under the same conditions eg. flipping a coing or or thowing a dice[14]. In most experiments, it may not be possible to provide the same experiment under the same conditions. however, we can assume that we provide the same experiment under very approximate conditions.

Single outcome/outcome: The result we get from the specific experiment is called outcome and this is shown with the symbol e [15].

Event: An event is a set of results that we expect from an experiment[16]. For example, consider a repeated experiment, and the desired values in this experiment might be the occurrence or non-occurrence of an event like heads or not heads in flipping coin. Event separated into two gruoups; 1) simple event; that has only one output and 2) Compound event; that may include more than one outcome. For example; flipping a coin is simple event in which we can count results and tossing two coins is an example of a compound event.

- Continuous sample space: It involves an infinite set of numbers.

- Discrete sample: It contains intervals and must be certain numbers.

<h2>Venn Diagram</h2>

- Universal set: Every object, including itself, is a set containing the element set. It is represented by the symbol U.

- Complement: Complement can be defined as everything except that is not. For example; If I say complement of ships in a barn that means everything except ships.

- Difference: comparison type for multiple sets. E.g If I ask you class A difference from class B, you can count the features that make A special from B. Common features will not be included.

Probability is a mathematical/statistical likehood representation of the occurrence of a specific event[17].

Properties of Probability

  <img src="/img/simulation/formulas.png" width="400" height="400">

<h2>Conditional Probability</h2>

Conditional probability is the occurrence of the possibility of an event due to another previously occurring event[18].

Let A and B be two events of the sample space E. From the probability of event A to event A with probability B to event B occurring. The conditional probability is symbolized by P(A | B). Which is shown as:

P(A│B)=(p(A∩B))/(p(B))

Example:

The students of a school, 45% fail physics, 35% math, and 25% fail both physics and math. A randomly selected student

If he is known to fail in physics, find the probability of failing in mathematics as well.

Solution:

P(M)=0.35 P(P)=0.45 P(M ∩P)= 0.25
P(M│P)=p(F∩M)/p(F) =0.25/0.45=0.55

Venn diagram relationships

a) Universal set b) AUB Union c) A' Complement of A B d) A∩B Intersection e) A-B Difference

  <img src="/img/simulation/Picture5.png" width="400" height="400">

<h2>Probability, Outcome, Event</h2>

Probability: the mathematical assumption that an outcome will happen.
Event: The expected outcomes from an experiment.
Outcome: is the result obtained as a result of the experiment.

Their expressions;

  <img src="/img/simulation/Picture6.png" width="400" height="400">

For this example:

P(A)= 0.1+0.3+0.5=0.9

P(B)=0.3+0.5.+0.1=0.9

P(A’)=1-0.9=0.1

P(AUB)= 0.1+0.3+0.5+0.1=1

P(A∩B)=0.3+0.5=0.8

### REFERENCES

[1] K. L. Sainani, “What is Computer Simulation?,” PM R, vol. 7, no. 12, pp. 1290–1293, Dec. 2015, doi: 10.1016/j.pmrj.2015.10.010.

[2] S. Perone and V. R. Simmering, “Applications of Dynamic Systems Theory to Cognition and Development: New Frontiers,” Adv. Child Dev. Behav., vol. 52, pp. 43–80, 2017, doi: 10.1016/BS.ACDB.2016.10.002.

[3] J. M. Durán, “What is a Simulation Model?,” Minds Mach., vol. 30, no. 3, pp. 301–323, Sep. 2020, doi: 10.1007/s11023-020-09520-z.

[4] V. Kershenbaum, L. Grigoriev, P. Kanygin, and A. Nistratov, “Probabilistic Modeling Processes for Oil and Gas,” in Probabilistic Modeling in System Engineering, 2018.

[5] N. Balakrishnan, B. Render, and R. M. Stair, “Linear Programming Models: Graphical and Computer Methods,” in Managerial Decision Modeling with Spreadsheets, 2013, pp. 19–56.

[6] C. Berlin and C. Adams, “Digital Human Modeling,” in Production Ergonomics: Designing Work Systems to Support Optimal Human Performance, 2017, p. 12.

[7] J. Banks, “Introduction to simulation,” in Winter Simulation Conference Proceedings, vol. 1, IEEE, 1999, pp. 7–13.

[8] E. C. Thuenemann, “Dynamic digestion models: General introduction,” in The Impact of Food Bioactives on Health: In Vitro and Ex Vivo Models, 2015.

[9] “SBK Holding ve 6 şirketine yönelik kara para aklama soruşturması - Son Dakika Flaş Haberler.” https://www.hurriyet.com.tr/gundem/sbk-holding-ve-6-sirketine-yonelik-kara-para-aklama-sorusturmasi-41703645 (accessed Mar. 02, 2021).

[10] J. Broekens, D. DeGroot, and W. A. Kosters, “Formal models of appraisal: Theory, specification, and computational model,” Cogn. Syst. Res., vol. 9, no. 3, pp. 173–197, Jun. 2008, doi: 10.1016/J.COGSYS.2007.06.007.

[11] M. V. Li, D. V. Niebuhr, L. L. Meekisho, and D. G. Atteridge, “A computational model for the prediction of steel hardenability,” Metall. Mater. Trans. B 1998 293, vol. 29, no. 3, pp. 661–672, 1998, doi: 10.1007/S11663-998-0101-3.

[12] J. D. Salciccioli, Y. Crutain, M. Komorowski, and D. C. Marshall, “Sensitivity analysis and model validation,” in Secondary Analysis of Electronic Health Records, 2016.

[13] P. Santi, “Appendix A: Elements of Probability Theory,” in Mobility Models for Next Generation Wireless Networks, 2012.

[14] M. Rausand, “Appendix A: Elements of Probability Theory,” in Reliability of Safety-Critical Systems, 2014.

[15] M. Rausand and S. Haugen, “Elements of Probability Theory,” in Risk Assessment, 2020.

[16] E. Simiu and D. Yeo, “Elements of Probability and Statistics,” in Wind Effects on Structures, 2019.

[17] G. S.-P. on contemporary statistics and undefined 1992, “What is probability,” glennshafer.com, Accessed: Oct. 29, 2021. [Online]. Available: http://www.glennshafer.com/assets/downloads/articles/article46.pdf.

[18] G. Shafer, “Conditional Probability,” Int. Stat. Rev. / Rev. Int. Stat., vol. 53, no. 3, p. 261, Dec. 1985, doi: 10.2307/1402890.
