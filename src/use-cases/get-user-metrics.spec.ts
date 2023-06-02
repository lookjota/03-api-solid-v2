import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { GetUserMetricsUseCase } from './get-user-metrics'

let checkInsRepository: InMemoryCheckInsRepository
let sut: GetUserMetricsUseCase

describe('Get User Metrics Use Case', () => {
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInsRepository()
    sut = new GetUserMetricsUseCase(checkInsRepository)
  })

  it('should be able to get check count from metrics', async () => {
    await checkInsRepository.create({
      gym_id: 'gym-01',
      user_id: 'user-01',
      validated_at: 'null',
    })

    await checkInsRepository.create({
      gym_id: 'gym-02',
      user_id: 'user-01',
      validated_at: 'null',
    })

    const { checkInCount } = await sut.execute({
      userId: 'user-01',
    })

    expect(checkInCount).toEqual(2)
  })
})
