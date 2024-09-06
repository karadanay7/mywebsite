---
authorname: Aysegul Karadan

title: "Kalman Filter Matlab Code"
img: /img/kalman/Kalman.png
date: 2023-03-16
description: "What is Kalman Filter ? How does Kalman Filter work? How can we solve real-life problem with using Kalman Filtering?"
head:
  meta:
    - name: "keywords"
      content: "Kalman filter, Kalman filtering, engineering, MATLAB, Kalman filter MATLAB, Kalman filter algorithm, Kalman filter applications, real-life Kalman filtering, how Kalman filter works, Kalman filter explained, Kalman filter examples, Kalman filter implementation, Kalman filter theory, Kalman filter basics, Kalman filter tutorial, Kalman filter guide, Kalman filter for engineers, Kalman filter use cases, Kalman filter problems, Kalman filter solutions, Kalman filter MATLAB examples, Kalman filter engineering, Kalman filter in practice, Kalman filter techniques, Kalman filter theory and application, Kalman filtering methods, Kalman filter real-world examples, Kalman filter in control systems, Kalman filter in robotics, Kalman filter in navigation, Kalman filter in aerospace, Kalman filter for signal processing, Kalman filter for tracking, Kalman filter for estimation, Kalman filter for state estimation, Kalman filter applications in engineering, Kalman filter for data smoothing, Kalman filter for noise reduction, Kalman filter in autonomous systems, Kalman filter for GPS, Kalman filter for sensor fusion, Kalman filter for object tracking, Kalman filter for dynamic systems, Kalman filter for prediction, Kalman filter for filtering, Kalman filter MATLAB code, Kalman filter MATLAB tutorial, Kalman filter MATLAB implementation, Kalman filter MATLAB applications, Kalman filter MATLAB examples, Kalman filter MATLAB guide, Kalman filter design, Kalman filter analysis, Kalman filter performance, Kalman filter accuracy, Kalman filter stability, Kalman filter convergence, Kalman filter tuning, Kalman filter parameters, Kalman filter optimization, Kalman filter and control theory, Kalman filter versus other filters, Kalman filter versus particle filter, Kalman filter mathematical model, Kalman filter for real-time systems, Kalman filter for estimation problems, Kalman filter for time series data, Kalman filter for engineering problems, Kalman filter and machine learning, Kalman filter and artificial intelligence, Kalman filter in robotics and automation, Kalman filter for vehicle tracking, Kalman filter for process control, Kalman filter for health monitoring, Kalman filter in environmental engineering, Kalman filter for industrial applications, Kalman filter for finance, Kalman filter for economics, Kalman filter in telecommunications, Kalman filter for image processing, Kalman filter for speech recognition, Kalman filter in smart sensors, Kalman filter and statistical methods, Kalman filter and signal processing, Kalman filter in digital systems, Kalman filter in communication systems, Kalman filter for system identification, Kalman filter for decision making, Kalman filter in energy systems, Kalman filter and filtering techniques, Kalman filter applications in science, Kalman filter for spatial data, Kalman filter for data assimilation, Kalman filter in military applications, Kalman filter for weather forecasting, Kalman filter in meteorology, Kalman filter for transportation systems, Kalman filter in healthcare, Kalman filter in smart grids, Kalman filter and optimization techniques, Kalman filter for robotics control, Kalman filter for predictive modeling, Kalman filter for algorithm design, Kalman filter in AI systems, Kalman filter and neural networks, Kalman filter for signal estimation, Kalman filter in research, Kalman filter for real-time estimation, Kalman filter and system dynamics, Kalman filter for autonomous vehicles, Kalman filter and complex systems"



    - name: "author"
      content: "Aysegul Karadan"
sitemap:
  loc: /blog/kalman-filter
---

## Kalman Filter: An Introduction

Kalman Filter is a widely used algorithm for estimating the state of a system based on noisy observations. It was developed by Rudolf E. Kálmán in the early 1960s and has since found numerous applications in various fields such as engineering, robotics, finance, and more. In this blog post, we will discuss the basics of Kalman Filter, including its history, principles, and applications.</div>
## What is Kalman Filter?

Kalman Filter is a recursive algorithm that estimates the state of a system over time based on a sequence of observations that are corrupted by noise. It uses a mathematical model of the system dynamics and measurements to estimate the true state of the system. The basic idea behind Kalman Filter is to use the available data to infer the state of the system and to update this estimate as new data becomes available.

## History of Kalman Filter


The development of Kalman Filter was motivated by the need to solve a problem in control theory known as the linear quadratic regulator (LQR) problem. The LQR problem involves finding a control policy that minimizes a quadratic cost function while ensuring that the system remains stable. Rudolf E. Kálmán, a Hungarian-American mathematician and electrical engineer, proposed a solution to this problem in 1960 using a recursive algorithm that estimated the state of the system based on noisy measurements.

## How does Kalman Filter work?

Kalman Filter works by maintaining a probabilistic estimate of the state of the system over time. This estimate is represented as a Gaussian distribution with mean and covariance, which are updated recursively based on the new observations. The state of the system is assumed to follow a linear dynamic model with Gaussian noise, and the observations are assumed to be linearly related to the state with Gaussian noise. The Kalman Filter updates the estimate of the state based on a two-step process: prediction and update.

### Prediction step :
 In the prediction step, the Kalman Filter uses the current estimate of the state and the state transition model to predict the state of the system at the next time step. The predicted state is represented as a Gaussian distribution with mean and covariance, which are computed using the following equations:
x̂_k|k-1 = F_k x̂_k-1|k-1 + B_k u_k + w_k
P_k|k-1 = F_k P_k-1|k-1 F_k^T + Q_k

where: 

x̂_k|k-1 is the predicted state of the system at time k given the observations up to time k-1.

F_k is the state transition matrix that describes how the state evolves over time.

B_k is the control input matrix that describes how the control input affects the state.

u_k is the control input at time k.

w_k is the process noise, which is assumed to be Gaussian with mean 0 and covariance Q_k.

P_k|k-1 is the predicted covariance of the state estimate at time k.
In the update step, the Kalman Filter uses the predicted state and the observation model to update the state estimate based on the new observation. The updated state is represented as a Gaussian distribution with mean and covariance, which are computed using the following equations:</br></div>


## MATLAB CODE FOR KALMAN FILTER

![Alt text](/img/kalman/Kalman.png)

## Here is the solution of the movement of an object with a constant acceleration by using Matlab

Let the position of a vehicle be measured at 5 feet (with a standard deviation) acceleration of 3 feet/sec2 and a measurement noise of 0.1 feet/sec2 (a standard deviation). Since the position is measured every 5 seconds, let's try to estimate the position of this vehicle in the best way with the Kalman filter in 20 sec duration.



```matlab
clc

clear

duration=20;

dt=0.1;

measnoise = 5; %position measurement noise (feet)

accelnoise = 0.1; %acceleration noise (feet/sec^2)

A = [1 dt; 0 1]; %transition matrix

B = [dt^2/2; dt]; %input matrix

C = [1 0]; %measurement matrix

x = [0; 0]; %initial state vector

xhat = x; %initial state estimate

Sz = measnoise^2; %measurement error covariance

Sw = accelnoise^2 \* [dt^4/4 dt^3/2; dt^3/2 dt^2];
P = Sw; %initial estimation covariance

%Initialize arrays for later plotting.

tpos = []; %true position array

poshat = []; %estimated position array

posmeasured = []; %measured position array

for t = 0 : dt: duration

%Constant acceleration

u = 3;

%Simulation

ProcessNoise = accelnoise * [(dt^2/2)*randn; dt\*randn];

x = A _x + B_ u + ProcessNoise;

%Measurement noise

MeasNoise = measnoise \* randn;

y = C \* x + MeasNoise;

%Estimation

xhat = A _xhat + B_ u;

Inn = y - C \* xhat;

s = C _P_ C' + Sz;

%Kalman gain

K = A _P_ C' \* inv(s);

%State estimate

xhat = xhat + K \* Inn;

%Estimation error

P = A _P_ A' - A _P_ C' _inv(s)_ C _P_ A' + Sw;

%values to plot

tpos = [tpos; x(1)];

posmeasured = [posmeasured; y];

poshat = [poshat; xhat(1)];

end

%Plotting

t = 0 : dt : duration;

figure;

plot(t,tpos,'g','LineWidth',2);
hold on

plot(t,posmeasured,'r.','LineWidth',2);

plot(t,poshat,'k','LineWidth',2);

title('Position Estimations');

xlabel('Time (sec)');

ylabel('Position(feet)');

legend('True Position', 'Measured Position', 'Estimated Position')


```



### References

1. R. E. Kalman, "A new approach to linear filtering and prediction problems," Transactions of the ASME -- Journal of Basic Engineering, vol. 82, pp. 35-45, March 1960.
2. G. Welch and G. Bishop, "An introduction to the Kalman filter," Technical Report TR 95-041, University of North Carolina at Chapel Hill, 2006.
3. S. Särkkä, "Bayesian filtering and smoothing," Cambridge University Press, 2013.
4. A. Gelb, "Applied optimal estimation," The MIT Press, 1974.
5. D. Simon, "Optimal state estimation: Kalman, H infinity, and nonlinear approaches," John Wiley & Sons, 2006.
