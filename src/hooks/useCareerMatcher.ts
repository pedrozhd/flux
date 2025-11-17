import { useCallback } from 'react';
import type { Career, CareerMatch } from '../types';
import { careers } from '../data/careers';

export const useCareerMatcher = () => {
  const calculateMatch = useCallback((
    userSkills: string[],
    career: Career
  ): number => {
    if (career.requiredSkills.length === 0) return 0;

    const matchedSkills = career.requiredSkills.filter(skill =>
      userSkills.some(userSkill =>
        userSkill.toLowerCase().includes(skill.toLowerCase()) ||
        skill.toLowerCase().includes(userSkill.toLowerCase())
      )
    );

    return Math.round(
      (matchedSkills.length / career.requiredSkills.length) * 100
    );
  }, []);

  const findMatches = useCallback((userSkills: string[]): CareerMatch[] => {
    if (userSkills.length === 0) return [];

    return careers
      .map(career => ({
        ...career,
        matchScore: calculateMatch(userSkills, career),
        missingSkills: career.requiredSkills.filter(
          skill => !userSkills.some(userSkill =>
            userSkill.toLowerCase().includes(skill.toLowerCase()) ||
            skill.toLowerCase().includes(userSkill.toLowerCase())
          )
        )
      }))
      .filter(career => career.matchScore > 20)
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 5);
  }, [calculateMatch]);

  return { findMatches, calculateMatch };
};
