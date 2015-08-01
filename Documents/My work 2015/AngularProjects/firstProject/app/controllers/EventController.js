"use strict";

angular.module("app").controller("EventController", function EventController($scope){
        $scope.event = {
            name: "Angular Bootcamp event",
            date: "01/08/2015",
            time: "10:00",
            location: {

                address: "Some address",
                city: "Mountain View",
                state: "CA"
            },
            image: "img/angularjs-logo.png",

            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this sesison you will learn the ins and outs of directives!',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: '30 mins',
                    level: 'Introductory',
                    abstract: 'This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: '2 hours',
                    level: 'Intermediate',
                    abstract: 'Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.',
                    upVoteCount: 0
                }
            ]

        }

    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    }

    $scope.downVoteSession = function(session){
        session.upVoteCount --;
    }
});